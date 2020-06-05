import React, { useState, useEffect } from 'react';
import './IdeaInfoOverlay.css'

const IdeaInfoOverlay = ({

}) => {

	const [open, setOpen] = useState(true);

	return (
		<div>
			{ open
				&& <div className='IdeaInfoOverlay'>
					<div className="IdeaInfoOverlay-Container">
						<div className="IdeaInfoOverlay-Box">
							<div className="IdeaInfoOverlay-Close" onClick={() => setOpen(false)}>
								close
							</div>
							<div className="IdeaInfoOverlay-Title">
								Idea Name
							</div>
							<div className="IdeaInfoOverlay-Description">
								Idea description Idea descriptionIdea descriptionIdea descriptionIdea
								descriptionIdea descriptionIdea description
								Idea descriptionIdea descriptionIdea descriptionIdea descriptionIdea
								descriptionIdea descriptionIdea descriptionIdea descriptionIdea descriptionIdea
								descriptionIdea description
								Idea descriptionIdea description
							</div>
							<div className="IdeaInfoOverlay-Team">
								<div className="IdeaInfoOverlay-Team-Title">
									Team
								</div>
								<div className="Team">

								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	)
};

export default IdeaInfoOverlay;