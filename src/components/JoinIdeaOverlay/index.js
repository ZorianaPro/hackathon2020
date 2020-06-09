import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './JoinIdeaOverlay.css';
import '../Overlay/Overlay.css';
import { close } from './actions';

const JoinIdeaOverlay = ({
	team,
  dispatch,
	isOpen,
	content
}) => {

	dispatch = useDispatch();

	[isOpen, content] = useSelector(state => [
		state.joinIdeaOverlayReducer.open,
		state.joinIdeaOverlayReducer.open
	]);

	const closeOverlay = () => {
		dispatch(close())
	};

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

							</div>
						</div>
					</div>
			}
		</div>
	);
};

export default JoinIdeaOverlay;