import React from 'react';
import { useSelector } from 'react-redux/es/exports';

export default function Missions() {
  const missions = useSelector((state) => state.missions);
  return (
    <div className="Missions-wrapper">
      <table className="Missions-table">
        <tbody>
          <tr>
            <th>Mission</th>
            <th className="Missions-description">Description</th>
            <th>Status</th>
            <th>Interaction</th>
          </tr>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <th>{mission.mission_name}</th>
              <th className="Missions-description">{mission.description}</th>
              <th>Status</th>
              <th>
                <button type="button">submit</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
