import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Header from '../Header';
import SVGSpriteSheet from '../SVGSpriteSheet';
import Button from '../Button';
import Ideas from '../Ideas';
import Footer from '../Footer';
import Registration from '../Registration';
import IdeaInfoOverlay from '../IdeaInfoOverlay';
import JoinIdeaOverlay from '../JoinIdeaOverlay';
import AddNewIdea from '../AddNewIdea';
import Schedule from '../Schedule';
import Rules from '../Rules';
import Inspiration from '../Inspiration';
import SuccessOveray from '../SuccessOverlay';
import memberService from '../../services/member';
import ideaService from '../../services/idea';

const App = () => {
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
  const [showJoinIdeaOverlay, setShowJoinIdeaOverlay] = useState(false);
  const [showAddIdeaOverlay, setShowAddIdeaOverlay] = useState(false);
  const [showIdeaInfoOverlay, setShowIdeaInfoOverlay] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [ideas, setIdeas] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const onCloseSuccessOverlay = useCallback(() => {
    setShowSuccessOverlay(false);
  }, []);

  const onCloseJoinIdeaOverlay = useCallback(() => {
    setShowJoinIdeaOverlay(false);
  }, []);

  const onCloseIdeaInfoOverlay = useCallback(() => {
    setShowIdeaInfoOverlay(false);
  }, []);

  const onCloseAddIdeaOverlay = useCallback(() => {
    setShowAddIdeaOverlay(false);
  }, []);

  const shouldOpenSuccessOverlay = useCallback(() => {
    setShowAddIdeaOverlay(false);
    setShowIdeaInfoOverlay(false);
    setShowJoinIdeaOverlay(false);
    setShowSuccessOverlay(true);
  }, []);

  const shouldOpenAddIdeaOverlay = useCallback(() => {
    setShowAddIdeaOverlay(true);
  }, []);

  const _onOpenJoinIdeaOverlay = useCallback((idea) => {
    setSelectedIdea(idea);
    setShowJoinIdeaOverlay(true);
  }, []);

  const _onOpenIdeaInfoOverlay = useCallback((idea) => {
    setSelectedIdea(idea);
    setShowIdeaInfoOverlay(true);
  }, []);

  const scrollTo = useCallback(() => {
    const elmnt = document.getElementById('registration');
    elmnt && elmnt.scrollIntoView({
      behavior: 'smooth'
    });
  }, []);

  const fetchIdeas = useCallback(async () => {
    try {
      setLoading(true);
      const ideas = await ideaService.get();
      setIdeas(await ideas.json());
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  });
  useEffect(() => {
    fetchIdeas();
    document.querySelector('.Hack-guy')
      .classList.remove('animate');

    document.querySelector('.App-Main-Section-Logo')
      .classList.remove('animate');

    document.querySelector('.App-Background')
      .classList.remove('animate');
  }, []);

  const onSubmitJoinIdeaForm = useCallback(
    (event) => {
      const formData = new FormData(event.target);
      const data = {
        id: formData.get('id'),
        member: {
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          position: formData.get('position')
        }
      };

      memberService.post(data)
        .then(() => {
          fetchIdeas();
          shouldOpenSuccessOverlay();
          setTimeout(() => {
            onCloseSuccessOverlay();
          }, 2000);
        })
        .catch((errorResponse) => {
          errorResponse.then((err) => {
            setErrorMessage(err.message);
          });
        });
    }, []);

  const onSubmitAddIdeaForm = useCallback((event) => {
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      description: formData.get('description')
    };
    ideaService.post(data)
      .then(() => {
        fetchIdeas();
        shouldOpenSuccessOverlay();
        setTimeout(() => {
          onCloseSuccessOverlay();
        }, 2000);
      })
      .catch((errorResponse) => {
        errorResponse.then((err) => {
          setErrorMessage(err.message);
        });
      });
  }, []);

  return (
    <div className="App">
      <section id="about" className="App-Main-Section">
        <div className="App-Background animate"/>
        <div className="App-Curtain"/>
        <div className="App-Left"
          data-aos-delay="1000"
          data-aos-duration="1000"
          data-aos="show-scale">
          <div className="App-Main-Section-Logo">
            <div className="Logo-Container">
              <Button label="Go to registration"
                type="isActionFilled"
                onClick={ scrollTo }/>
            </div>
          </div>
        </div>
        <div className="App-Main-Section-Container">
          <Header />
        </div>
      </section>
      <div className="Hack-guy animate"/>
      <Registration
        onOpenAddIdeaOverlay={
          shouldOpenAddIdeaOverlay
        }
        onOpenJoinIdeaOverlay={
          _onOpenJoinIdeaOverlay
        }/>
      <Ideas
        onOpenJoinIdeaOverlay={
          _onOpenJoinIdeaOverlay
        }
        onOpenIdeaInfoOverlay={
          _onOpenIdeaInfoOverlay
        }
        ideas={
          ideas
        }
        loading={
          loading
        }
        error={
          error
        }
        onClickAddIdeaBtn={
          shouldOpenAddIdeaOverlay
        }/>
      <Inspiration/>
      <Schedule />
      <Rules />
      <SVGSpriteSheet />
      <Footer/>
      { showIdeaInfoOverlay
        && <IdeaInfoOverlay
          onClose={
            onCloseIdeaInfoOverlay
          }
          content={
            selectedIdea
          }
        />
      }
      {
        showJoinIdeaOverlay
        && <JoinIdeaOverlay
          onClose={
            onCloseJoinIdeaOverlay
          }
          ideas={
            ideas
          }
          selectedIdea={
            selectedIdea
          }
          onSubmit={
            onSubmitJoinIdeaForm
          }
          error={
            errorMessage
          }
        />
      }
      {
        showSuccessOverlay
        && <SuccessOveray
          onClose={
            onCloseSuccessOverlay
          }
        />
      }
      {
        showAddIdeaOverlay
        && <AddNewIdea
          onClose={
            onCloseAddIdeaOverlay
          }
          error={
            errorMessage
          }
          onSubmit={
            onSubmitAddIdeaForm
          }
        />
      }
    </div >
  );
};

export default App;