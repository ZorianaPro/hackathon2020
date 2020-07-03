import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './AddNewIdea.css';
import '../Overlay/Overlay.css';
import { close, submit, error } from './actions';
import { fetchAllIdeas } from '../Ideas/actions';
import handle from '../../helpers/handlers'

const AddNewIdea = ({
  team,
  dispatch,
  isOpen,
  id,
  errorMessage
}) => {

	dispatch = useDispatch();

	const [ideaName, setIdeaName] = useState('');
	const [description, setDescription] = useState('');
	const [submitFrom, setSubmitForm] = useState(false);
	const [showThankYou, setShowThankYou] = useState(false);

	[isOpen, id, errorMessage] = useSelector(state => [
		state.addNewIdeaReducer.open,
		state.addNewIdeaReducer.content.id,
		state.addNewIdeaReducer.error
	]);

	const handleChange = useCallback(
		(target) => {
			const field = target.name;
			const value = target.value;
			switch (field) {
				case 'ideaName':
					return setIdeaName(value);
				case 'description':
					return setDescription(value);
			}

		}, []
	);

	const closeOverlay = useCallback(
		() => {
			dispatch(close())
		}, []
	);

	const addNewIdea = useCallback(
		(e) => {
			e.preventDefault();
			setSubmitForm(true);
			return false
		}, []
	);

	useEffect(() => {
		if (submitFrom) {
			const data = {
				name: ideaName,
				description: description
			};
			const requestOptions = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			};
			fetch('http://localhost:8082/ideas', requestOptions)
				.then(response => {
					if (response.ok) {
						dispatch(fetchAllIdeas());
						setSubmitForm(false);
						setShowThankYou(true);
						setTimeout(() => {
							dispatch(close());
							setShowThankYou(false);
						}, 2000)
					} else {
						throw response.json()
					}
				})
				.catch((errorResponse) => {
					errorResponse.then(err => {
						dispatch(error(err.message));
						setSubmitForm(false);
					})
				})
		}
	}, [submitFrom]);

	return (
		<div className="AddNewIdea">
			{ isOpen
				&& <div className="Overlay">
					<div className="Overlay-Container">
						{ !showThankYou
							&& <div className="Overlay-Box">
							<div className="Overlay-Close" onClick={() => closeOverlay()}>
								close
							</div>
							<div className="AddNewIdea-Title">
								Add new idea
							</div>
							{
								errorMessage
							}
							<form action="" onSubmit={(e) => addNewIdea(e)} method="POST">
								<div>
									<label htmlFor="ideaName" className={`${ideaName !== '' ? 'focus' : ''}`}>Idea Name*</label>
									<input type="text" name="ideaName" required value={ideaName}
									       onFocus={(e) => handle.focus(e.currentTarget)}
									       onBlur={(e) => handle.blur(e.currentTarget)}
									       onChange={(e) => handleChange(e.target)}/>
								</div>
								<div>
									<label htmlFor="description" className={`${description !== '' ? 'focus' : ''}`}>Idea Description*</label>
									<textarea name="description" required value={description}
									       onFocus={(e) => handle.focus(e.currentTarget)}
									       onBlur={(e) => handle.blur(e.currentTarget)}
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

export default AddNewIdea;