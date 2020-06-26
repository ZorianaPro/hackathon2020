import React, { useState, useEffect, useCallback } from 'react';
import { teams } from '../../server/mockServerData';
import Team from '../Team';
import * as ideaOverlay from "../IdeaInfoOverlay/actions";
import * as joinOverlay from "../JoinIdeaOverlay/actions";
import  './IdeaCard.css';
import { useDispatch } from "react-redux";

const IdeaCard = ({
  name,
	description,
	team,
	id,
	dispatch
}) => {


	dispatch = useDispatch();

	const joinIdeaOverlay = useCallback(() => {
			dispatch(joinOverlay.open({
				id: id
			}))
		}, [id, dispatch]);

	const openIdeaOverlay = useCallback(() => {
		dispatch(ideaOverlay.open({
			id: id,
			name: name,
			description: description,
			team: team
		}))
	}, [id, name, description, team, dispatch]);

	return (
		<div className="IdeaCard" key={id}>
			<div className="IdeaCard-Container">
				<div className="IdeaCard-Info">
					<div className="IdeaCard-Info-Name">
						{name}
					</div>
					<div className="IdeaCard-Info-Description">
						{description}
					</div>
				</div>
				<div className="IdeaCard-Actions">
					{
						team
						&& <Team full={false}
						         team={team}/>
					}
					<div className="Idea-Actions-Join"
					     onClick={() => joinIdeaOverlay()}>
						+ join
					</div>
					<div className="IdeaCard-More"
					     onClick={() => openIdeaOverlay()}>
						MORE
					</div>
				</div>
			</div>
		</div>
	)
};

export default IdeaCard;