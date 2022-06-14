import React from 'react';
import {
  Container, Col, Row, Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { reserveRocket } from '../redux/rockets/Redux-Rockets';

export default function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  return (
    <Container>
      {
        rockets.map((rocket) => (
          <Row key={rocket.id} className="mb-3">
            <Col sm={4}>
              <img src={rocket.images[0]} alt="Rocket" />
            </Col>
            <Col sm={8}>
              <p className="h4">{rocket.name}</p>
              <p>{rocket.description}</p>
              <Button variant="primary" size="md" onClick={() => dispatch(reserveRocket(rocket.id))}>Reserve Rocket</Button>
              {/* Button to check reservation on rocket item in the console --> */}
              <Button variant="primary" size="md" onClick={() => console.log(rocket)}>print</Button>
            </Col>
          </Row>
        ))
      }
    </Container>
  );
}
