import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Team from '../Team';
import './IdeaInfoOverlay.css';
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
		state.ideaInfoOverlayReducer.ideaContent
	]);

	const closeOverlay = () => {
		dispatch(close())
	};

	return (
		<div>
			{ isOpen
				&& <div className="IdeaInfoOverlay" key={`idea-${content.id}-overlay`}>
					<div className="IdeaInfoOverlay-Container">
						<div className="IdeaInfoOverlay-Box">
							<div className="IdeaInfoOverlay-Close" onClick={() => closeOverlay()}>
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