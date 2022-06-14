import React from 'react';
import { useSelector } from 'react-redux/es/exports';

export default function Missions() {
  const missions = useSelector((state) => state.missions);
  console.log(missions);
  return (
    <div>
      <h1>Missions</h1>
    </div>
  );
}
