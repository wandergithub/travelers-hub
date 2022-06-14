import React from 'react';
import { useSelector } from 'react-redux/es/exports';

export default function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets);
  return <h1>Rockets</h1>;
}
