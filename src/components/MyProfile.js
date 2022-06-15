import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

export default function MyProfile() {
  const data = useSelector((state) => state.missions);
  const missions = data.filter((mission) => mission.reserved);
  const reservedRockets = useSelector((state) => state.rockets).filter((rocket) => rocket.reserved);
  return (
    <div>
      <div className="MyProfile-Missions">
        <div className="MyProfile-Missions-Wraper">
          <h1>My Missions</h1>
          <div className="MyProfile-Mission">
            {missions.map((mission) => (
              <h2 key={mission.mission_id}>{mission.mission_name}</h2>
            ))}
          </div>
        </div>
      </div>
      <div className="MyProfile-Rockets">
        <h1>My Rockets</h1>
        <ListGroup>
          {reservedRockets.map(
            (rocket) => <ListGroup.Item key={rocket.id} className="h3">{rocket.name}</ListGroup.Item>,
          )}
        </ListGroup>
      </div>
    </div>
  );
}
