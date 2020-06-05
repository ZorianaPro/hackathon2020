import React, { useState, useEffect } from 'react';
import { teams } from '../../server/mockServerData';
import  './IdeaCard.css';

const IdeaCard = ({
  name,
	description,
	teamId,
	id
}) => {

	const team = teams.find((team) =>  {
		if (team.id === teamId) {
			return team
		}
	});

	const joinIdeaOverlay = (id) => {
		console.log('opens join idea overlay')
	};

	const openIdeaOverlay = (id) => {
		console.log('opens Idea overlay')
	};

	return (
		<div className='IdeaCard' key={id}>
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
					<div className="Team">
						<div className="Team-Members">
							{ team
							&& (team.members || []).map((member) => {
									return (
										<div className='Team-Member' key={member.id}>
											<p title={member.name}>MR</p>
										</div>
									)
								})
							}
						</div>
						<div className="Team-Join"
						     onClick={() => joinIdeaOverlay(id)}>
							+ join
						</div>
					</div>
					<div className="IdeaCard-More"
					     onClick={() => openIdeaOverlay(id)}>
						MORE
					</div>
				</div>
			</div>
		</div>
	)
};

export default IdeaCard;