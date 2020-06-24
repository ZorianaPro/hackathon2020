import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './JoinIdeaOverlay.css';
import '../Overlay/Overlay.css';
import { close, submit } from './actions';

const JoinIdeaOverlay = ({
	team,
  dispatch,
	isOpen,
	ideaId
}) => {

	dispatch = useDispatch();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [position, setPosition] = useState('');
	const [submitFrom, setSubmitForm] = useState(false);
	const [showThankYou, setShowThankYou] = useState(false);

	[isOpen, ideaId] = useSelector(state => [
		state.joinIdeaOverlayReducer.open,
		state.joinIdeaOverlayReducer.content.id
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
			}

		}, []
	);

	const closeOverlay = useCallback(
		() => {
			dispatch(close())
		}, []
	);

	const joinIdea = useCallback(
		(e) => {
			e.preventDefault();
			setSubmitForm(true);
			return false
		}, []
	);

	useEffect(() => {

		if (submitFrom) {
			const data = {
				ideaId: ideaId,
				firstName: firstName,
				lastName: lastName,
				email: email,
				position: position
			};
			console.log(data);
			// do all this in promise and clean state after submit
			dispatch(submit(data));
			setSubmitForm(false);
			setShowThankYou(true);
			setTimeout(() => {
				dispatch(close());
				setShowThankYou(false);
			}, 3000)
		} else {

		}
	}, [submitFrom]);

	const animateLabel = useCallback(
		(input, focus=true) => {
		const labelName = input.name;
		const labels = document.getElementsByTagName('label');
			for( let i = 0; i < labels.length; i++ ) {
				if (labels[i].htmlFor === labelName)
					if (!focus) {
						if (input.value === '') {
							labels[i].classList.remove('focus');
						}
					} else {
						labels[i].classList.add('focus');
					}
			}
		},[]);

	return (
		<div className="JoinIdeaOverlay">
			{ isOpen
				&& <div className="Overlay">
					<div className="Overlay-Container">
						{ !showThankYou
							&& <div className="Overlay-Box">
							<div className="Overlay-Close" onClick={() => closeOverlay()}>
								close
							</div>
							<div className="JoinIdeaOverlay-Title">
								Join the idea
							</div>
							<form  className="JoinIdeaOverlay-Form" action="" onSubmit={(e) => joinIdea(e)} method="POST">
								<div className="JoinIdeaOverlay-Input-Container">
									<label htmlFor="firstName" className={`${firstName !== '' ? 'focus' : ''}`}>First Name*</label>
									<input type="text" name="firstName" required value={firstName}
									       onFocus={(e) => animateLabel(e.target, true)}
									       onBlur={(e) => animateLabel(e.target, false)}
									       onChange={(e) => handleChange(e.target)}/>
								</div>
								<div className="JoinIdeaOverlay-Input-Container">
									<label htmlFor="lastName" className={`${lastName !== '' ? 'focus' : ''}`}>Last Name*</label>
									<input type="text" name="lastName" required value={lastName}
									       onFocus={(e) => animateLabel(e.target, true)}
									       onBlur={(e) => animateLabel(e.target, false)}
									       onChange={(e) => handleChange(e.target)}/>
								</div>
								<div className="JoinIdeaOverlay-Input-Container">
									<label htmlFor="email" className={`${email !== '' ? 'focus' : ''}`}>Your email*</label>
									<input type="email" name="email" required value={email}
									       onFocus={(e) => animateLabel(e.target, true)}
									       onBlur={(e) => animateLabel(e.target, false)}
									       onChange={(e) => handleChange(e.target)}/>
								</div>
								<div className="JoinIdeaOverlay-Input-Container">
									<label htmlFor="position" className={`${position !== '' ? 'focus' : ''}`}>Position*</label>
									<input type="text" name="position" required value={position}
									       onFocus={(e) => animateLabel(e.target, true)}
									       onBlur={(e) => animateLabel(e.target, false)}
									       onChange={(e) => handleChange(e.target)}/>
								</div>
								<button type="submit">Submit</button>
							</form>
						</div>
						}
						{	showThankYou
							&& <div className="Overlay-Box">
							<div className="Overlay-Close" onClick={() => closeOverlay()}>
								close
							</div>
							<div>Thank you</div>
						</div>
						}
						</div>
					</div>
			}
		</div>
	);
};

export default JoinIdeaOverlay;