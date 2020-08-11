import React, { useState, useCallback } from 'react';
import Overlay from '../Overlay';
import './JoinIdeaOverlay.css';
import '../Overlay/Overlay.css';

const JoinIdeaOverlay = ({
  onClose,
  shouldClose,
  ideas,
  selectedIdea,
  error,
  onSubmit
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  const _onClose = useCallback((event) => {
    if (typeof onClose === 'function') {
      onClose(event);
    }
  }, [onClose]);

  const onChange = useCallback((event) => {
    const field = event.target.name;
    const value = event.target.value;
    switch (field) {
      case 'firstName':
        return setFirstName(value);
      case 'lastName':
        return setLastName(value);
      case 'email':
        return setEmail(value);
      case 'position':
        return setPosition(value);
    }
  }, []);

  const _onSubmit = useCallback((event) => {
    event.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit(event);
    }
    return false;
  }, [onSubmit]);

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
      <div className="JoinIdeaOverlay">
        <div className="JoinIdeaOverlay-Title">
          Join the idea
        </div>
        {
          error
          && <div className="Error-Message">
            { error }
          </div>
        }
        <form
          onSubmit={
            _onSubmit
          }
          method="POST">
          {
            ideas
            && <select name="id"
              value={ selectedIdea ? selectedIdea._id : '' }
              required>
              <option disabled selected value>
                Please choose the idea
              </option>
              {
                ideas.map((idea) =>
                  <option value={ idea._id } >{ idea.name }</option>
                )
              }
            </select>
          }
          <div>
            <label htmlFor="firstName"
              className={ `${firstName !== '' ? 'focus' : ''}` }
            >
              First Name*
            </label>
            <input type="text"
              name="firstName"
              onFocus={ onFocus }
              onBlur={ onBlur }
              onChange={ onChange }
              required
            />
          </div>
          <div>
            <label htmlFor="lastName"
              className={ `${lastName !== '' ? 'focus' : ''}` }
            >
              Last Name*
            </label>
            <input type="text"
              name="lastName"
              value={lastName}
              onFocus={ onFocus }
              onBlur={ onBlur }
              onChange={ onChange }
              required
            />
          </div>
          <div>
            <label htmlFor="email"
              className={ `${email !== '' ? 'focus' : ''}` }
            >
              Your email*
            </label>
            <input type="email"
              name="email"
              onFocus={ onFocus }
              onBlur={ onBlur }
              onChange={ onChange }
              required
            />
          </div>
          <div>
            <label htmlFor="position"
              className={ `${position !== '' ? 'focus' : ''}` }
            >
              Position*
            </label>
            <input
              type="text"
              name="position"
              onFocus={ onFocus }
              onBlur={ onBlur }
              onChange={ onChange }
              required
            />
          </div>
          <button type="submit" className="Button Button--isSecondaryTransparent">
            <p className="Button-Inside">
             Submit
            </p>
          </button>
        </form>
      </div>
    </Overlay>
  );
};

export default JoinIdeaOverlay;