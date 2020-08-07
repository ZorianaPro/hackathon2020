import React, { useState, useEffect, useCallback } from 'react';
import Button from '../Button';
import Team from '../Team';
import * as ideaOverlay from "../IdeaInfoOverlay/actions";
import * as joinOverlay from "../JoinIdeaOverlay/actions";
import  './IdeaCard.css';
import { useDispatch } from "react-redux";
import AddPersonSVG from "../AddPersonSVG";

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
				{
					team
					&& <Team full={false}
									 team={team}/>
				}
				<div className="IdeaCard-Info">
					<p className="IdeaCard-Info-Name">
						{name}
					</p>
					<p className="IdeaCard-Info-Description">
						{description}
					</p>
				</div>
				<div className="IdeaCard-Actions">
					<Button type="isSecondaryTransparent"
									onClick={() => joinIdeaOverlay()}>
						<AddPersonSVG /> join
					</Button>
					<Button type="isSecondaryTransparent"
									onClick={() => openIdeaOverlay()}>
						More
					</Button>
				</div>
			</div>
		</div>
	)
};

export default IdeaCard;