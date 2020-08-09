import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Team from '../Team';
import handle from '../../support/handlers';
import './IdeaInfoOverlay.css';
import '../Overlay/Overlay.css';
import { close } from './actions';

const IdeaInfoOverlay = ({
  dispatch,
	isOpen,
	content
}) => {

	dispatch = useDispatch();

	[isOpen, content] = useSelector(state => [
		state.ideaInfoOverlayReducer.open,
		state.ideaInfoOverlayReducer.content
	]);

	const closeOverlay = useCallback(() => {
		dispatch(close())
	}, [dispatch]);

	useEffect(() => {
		handle.scrollElToCenter()
	},[isOpen]);

	return (
		<div className="IdeaInfoOverlay">
			{ isOpen
				&& <div className="Overlay" key={`idea-${content.id}-overlay`}>
					<div className="Overlay-Container">
						<div className="Overlay-Box">
							<div className="Overlay-Close" onClick={ closeOverlay }>
								close
							</div>
							<p className="IdeaInfoOverlay-Title">
								{content.name}
							</p>
							<p className="IdeaInfoOverlay-Description">
								{content.description}
							</p>
							<div className="IdeaInfoOverlay-Team">
								<div className="IdeaInfoOverlay-Team-Title">
									{ content.team.length !== 0 ? "Team" : 'There is no one in a team yet'}
								</div>
								{
									content.team
									&& <Team full={ true }
									         team={ content.team }/>
								}
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	);
};

export default IdeaInfoOverlay;