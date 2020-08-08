import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './JoinIdeaOverlay.css';
import '../Overlay/Overlay.css';
import { close, submit, error, clean } from './actions';
import handle from '../../support/handlers';
import { fetchAllIdeas } from "../Ideas/actions";
import memberService from "../../services/member";

const JoinIdeaOverlay = ({
	team,
  dispatch,
	isOpen,
	id,
	errorMessage
}) => {

	dispatch = useDispatch();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [position, setPosition] = useState('');
	const [submitFrom, setSubmitForm] = useState(false);
	const [showThankYou, setShowThankYou] = useState(false);

	const cleanState = () => {
		setFirstName('');
		setLastName('');
		setEmail('');
		setPosition('');
		setSubmitForm(false);
		dispatch(clean());
	};


	[isOpen, id, errorMessage] = useSelector(state => [
		state.joinIdeaOverlayReducer.open,
		state.joinIdeaOverlayReducer.content.id,
		state.joinIdeaOverlayReducer.error
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
				id: id,
				member: {
					firstName: firstName,
					lastName: lastName,
					email: email,
					position: position
				}
			};

			memberService.post(data)
				.then(() => {
					dispatch(fetchAllIdeas());
					setShowThankYou(true);
					cleanState();
					setTimeout(() => {
						dispatch(close());
						setShowThankYou(false);
					}, 2000)
				})
				.catch((errorResponse) => {
					errorResponse.then(err => {
						dispatch(error(err.message));
						setSubmitForm(false);
					})
				})
		}
	}, [submitFrom]);

	useEffect(() => {
		handle.scrollElToCenter()
	},[isOpen]);

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
							{
								errorMessage
								&& <div className="Error-Message">{
									errorMessage
								}</div>
							}
							<form  action="" onSubmit={(e) => joinIdea(e)} method="POST">
								<div>
									<label htmlFor="firstName" className={`${firstName !== '' ? 'focus' : ''}`}>First Name*</label>
									<input type="text" name="firstName" required value={firstName}
									       onFocus={(e) => handle.focus(e.currentTarget)}
									       onBlur={(e) => handle.blur(e.currentTarget)}
									       onChange={(e) => handleChange(e.target)}/>
								</div>
								<div>
									<label htmlFor="lastName" className={`${lastName !== '' ? 'focus' : ''}`}>Last Name*</label>
									<input type="text" name="lastName" required value={lastName}
									       onFocus={(e) => handle.focus(e.currentTarget)}
									       onBlur={(e) => handle.blur(e.currentTarget)}
									       onChange={(e) => handleChange(e.target)}/>
								</div>
								<div>
									<label htmlFor="email" className={`${email !== '' ? 'focus' : ''}`}>Your email*</label>
									<input type="email" name="email" required value={email}
									       onFocus={(e) => handle.focus(e.currentTarget)}
									       onBlur={(e) => handle.blur(e.currentTarget)}
									       onChange={(e) => handleChange(e.target)}/>
								</div>
								<div>
									<label htmlFor="position" className={`${position !== '' ? 'focus' : ''}`}>Position*</label>
									<input type="text" name="position" required value={position}
									       onFocus={(e) => handle.focus(e.currentTarget)}
									       onBlur={(e) => handle.blur(e.currentTarget)}
									       onChange={(e) => handleChange(e.target)}/>
								</div>
								<button type="submit" className="Button Button--isSecondaryTransparent">
									<p className="Button-Inside">
									Submit
								</p></button>
							</form>
						</div>
						}
						{	showThankYou
							&& <div className="Overlay-Box">
							<div className="Overlay-Close" onClick={() => closeOverlay()}>
								close
							</div>
							<div className="Success-Message">Woohoo.. It was successful!</div>
						</div>
						}
						</div>
					</div>
			}
		</div>
	);
};

export default JoinIdeaOverlay;