import React, { useState, useCallback } from 'react';
import Overlay from '../Overlay';
import './AddNewIdea.css';
import '../Overlay/Overlay.css';

const AddNewIdea = ({
  dispatch,
  isOpen,
  errorMessage,
  shouldClose,
  onClose,
  error,
  onSubmit
}) => {
  const [ideaName, setIdeaName] = useState('');
  const [description, setDescription] = useState('');

  const _onClose = useCallback((event) => {
    if (typeof onClose === 'function') {
      onClose(event);
    }
  }, [onClose]);

  const onChange = useCallback((event) => {
    const field = event.target.name;
    const value = event.target.value;
    switch (field) {
      case 'ideaName':
        return setIdeaName(value);
      case 'description':
       return setDescription(value);
    }
  }, []	);

  const _onSubmit = useCallback((event) => {
    event.preventDefault();
      if (typeof onSubmit === 'function') {
        onSubmit(event);
      }
      return false;
  }, []);

  const onFocus = useCallback((event) => {
    const input = event.target;
    const label = input.parentElement.querySelector('label');
    label && label.classList.add('focus');
  }, []);

  const onBlur = useCallback((event) => {
    const input = event.target;
    const label = input.parentElement.querySelector('label');
    if (input.value === '') {
      label && label.classList.remove('focus');
    }
  }, []);

  return (
    <Overlay
      onClose={
        _onClose
      }
      shouldClose={
        shouldClose
      }>
      <div className="AddNewIdea">
        <div className="AddNewIdea-Title">
          Add new idea
        </div>
			  {
				  errorMessage
				  && <div className="Error-Message">
					  { errorMessage }
				  </div>
			  }
			  <form action="" onSubmit={ _onSubmit } method="POST">
				  <div>
					  <label htmlFor="ideaName"
						  className={ `${ideaName !== '' ? 'focus' : ''}` }
					  >
						  Idea Name*
						</label>
					  <input type="text"
					    name="name"
						  onFocus={ onFocus }
						  onBlur={ onBlur }
						  onChange={ onChange }
              required
					  />
					</div>
					<div>
					  <label htmlFor="description"
						  className={ `align-top ${description !== '' ? 'focus' : ''}` }
					  >
						  Idea Description*
						</label>
						<textarea rows="5"
						  name="description"
						  onFocus={ onFocus }
						  onBlur={ onBlur }
						  onChange={ onChange }
              required
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		</Overlay>
	);
};

export default AddNewIdea;