import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './JoinIdeaOverlay.css';
import '../Overlay/Overlay.css';
import { close } from './actions';
import Button from "../Button";

const JoinIdeaOverlay = ({
	team,
  dispatch,
	isOpen,
	content
}) => {

	dispatch = useDispatch();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [position, setPosition] = useState('');
	const [ideaId, setIdeaId] = useState('');

	[isOpen, content] = useSelector(state => [
		state.joinIdeaOverlayReducer.open,
		state.joinIdeaOverlayReducer.content
	]);

	const handleChange = useCallback(
		(target) => {
			const field = target.name;
			const value = target.value;
			switch (field) {
				case 'firstName':
					return setFirstName(value);
				case 'lastName':
					return setLastName(value);
				case 'email':
					return setEmail(value);
				case 'position':
					return setPosition(value);
				case 'ideaId':
					return setIdeaId(value);
			}

		}, []
	);

	const closeOverlay = useCallback(
		() => {
			dispatch(close())
		}, [dispatch]
	);

	const joinIdea = useCallback(
		(e) => {
			e.preventDefault();
			debugger
			return false
		}, []
	);

	const animateLabel = useCallback(
		(input, action='') => {
		const labelName = input.name;
		const labels = document.getElementsByTagName('label');
			for( let i = 0; i < labels.length; i++ ) {
				if (labels[i].htmlFor === labelName)
					if (action === 'focusIn') {
						labels[i].classList.add('focus');
					} else {
						if (input.value === '') {
							labels[i].classList.remove('focus');
						}
					}
			}
		},[]);

	return (
		<div className="JoinIdeaOverlay">
			{ isOpen
				&& <div className="Overlay">
					<div className="Overlay-Container">
						<div className="Overlay-Box">
							<div className="Overlay-Close" onClick={() => closeOverlay()}>
								close
							</div>
							<div className="JoinIdeaOverlay-Title">
								Join the idea
							</div>
							<form  className="JoinIdeaOverlay-Form" action="" onSubmit={(e) => joinIdea(e)} method="POST">
								<div className="JoinIdeaOverlay-Input-Container">
									<label htmlFor="firstName">First Name*</label>
									<input type="text" name="firstName" required value={firstName}
									       onFocus={(e) => animateLabel(e.target, 'focusIn')}
									       onBlur={(e) => animateLabel(e.target, 'focusOut')}
									       onChange={(e) => handleChange(e.target)}/>
								</div>
								<div className="JoinIdeaOverlay-Input-Container">
									<label htmlFor="lastName">Last Name*</label>
									<input type="text" name="lastName" required value={lastName}
									       onFocus={(e) => animateLabel(e.target, 'focusIn')}
									       onBlur={(e) => animateLabel(e.target, 'focusOut')}
									       onChange={(e) => handleChange(e.target)}/>
								</div>
								<div className="JoinIdeaOverlay-Input-Container">
									<label htmlFor="email">Your email*</label>
									<input type="email" name="email" required value={email}
									       onFocus={(e) => animateLabel(e.target, 'focusIn')}
									       onBlur={(e) => animateLabel(e.target, 'focusOut')}
									       onChange={(e) => handleChange(e.target)}/>
								</div>
								<div className="JoinIdeaOverlay-Input-Container">
									<label htmlFor="position">Position*</label>
									<input type="text" name="position" required value={position}
									       onFocus={(e) => animateLabel(e.target, 'focusIn')}
									       onBlur={(e) => animateLabel(e.target, 'focusOut')}
									       onChange={(e) => handleChange(e.target)}/>
								</div>
								<select name="ideaId" value={ideaId} onChange={(e) => handleChange(e.target)}>
									<option >Please select the idea from the list</option>
									<option value={1}> Idea Name </option>
								</select>
								<button type="submit">Submit</button>
							</form>
							</div>
						</div>
					</div>
			}
		</div>
	);
};

export default JoinIdeaOverlay;