import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Team from '../Team';
import './IdeaInfoOverlay.css';
import '../Overlay/Overlay.css';
import { close } from './actions';

const IdeaInfoOverlay = ({
	team,
  dispatch,
	isOpen,
	content
}) => {

	dispatch = useDispatch();

	[isOpen, content] = useSelector(state => [
		state.ideaInfoOverlayReducer.open,
		state.ideaInfoOverlayReducer.content
	]);

	const closeOverlay = () => {
		dispatch(close())
	};

	return (
		<div className="IdeaInfoOverlay">
			{ isOpen
				&& <div className="Overlay" key={`idea-${content.id}-overlay`}>
					<div className="Overlay-Container">
						<div className="Overlay-Box">
							<div className="Overlay-Close" onClick={() => closeOverlay()}>
								close
							</div>
							<div className="IdeaInfoOverlay-Title">
								{content.name}
							</div>
							<div className="IdeaInfoOverlay-Description">
								{content.description}
							</div>
							<div className="IdeaInfoOverlay-Team">
								<div className="IdeaInfoOverlay-Team-Title">
									Team
								</div>
							<Team full={ true }
							      team={ content.team }/>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	);
};

export default IdeaInfoOverlay;