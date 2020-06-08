import React, { useState, useEffect, useCallback } from 'react';
import { teams } from '../../server/mockServerData';
import Team from '../Team';
import { open } from "../IdeaInfoOverlay/actions";
import  './IdeaCard.css';
import { useDispatch } from "react-redux";

const IdeaCard = ({
  name,
	description,
	teamId,
	id,
	dispatch
}) => {

	const team = teams.find((team) =>  {
		if (team.id === teamId) {
			return team
		}
	});

	const joinIdeaOverlay = (id) => {
		console.log('opens join idea overlay')
	};

	dispatch = useDispatch();

	const openIdeaOverlay = useCallback(() => {
		dispatch(open({
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
					<Team full={false}
					team={team}/>
					<div className="Idea-Actions-Join"
					     onClick={() => joinIdeaOverlay(id)}>
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