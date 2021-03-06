import React from 'react';
import './Team.css';

const Team = ({
  full = true,
  team = []
}) => {
  const initials = (firstName, lastName) => {
    return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  };
  return (
    <div className={`Team ${full ? 'Team--full' : 'Team--short'}`}>
      <div className="Team-Members">
        { team.length > 0 ? team.map((member) => (
          <div className="Team-Member" key={member.id}>
            <p className="Team-Member-Initials">
              { initials(member.firstName, member.lastName) }
            </p>
            { full && <div className="Team-Member-Info">
              <div className="Team-Member-Info-Name">
                {`${member.firstName} ${member.lastName}`}
              </div>
              <a href={`mailto:${member.email}`} className="Team-Member-Info-Email">
                {member.email}
              </a>
              <div className="Team-Member-Info-Position">
                {member.position}
              </div>
            </div>
            }
          </div>
        ))
          : <div className="Team--empty">No members yet</div>
        }
      </div>
    </div>
  );
};

export default Team;