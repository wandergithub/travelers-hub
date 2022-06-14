import React from 'react';
import { useSelector } from 'react-redux/es/exports';

export default function Missions() {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);
  console.log(missions);
  console.log(rockets);

  return (
    <div>
      <h1>Missions</h1>
    </div>
  );
}
