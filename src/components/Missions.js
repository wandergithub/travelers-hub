import React from 'react';
import { useSelector } from 'react-redux';

const Missions = () => {
  const missions = useSelector((state) => state.rockets);
  console.log(missions);
  return (
    <div>
      <h1>Missions</h1>
    </div>
  );
};

export default Missions();
