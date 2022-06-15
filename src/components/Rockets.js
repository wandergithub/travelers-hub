import React from 'react';
import {
  Container, Col, Row, Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
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
              {rocket.reserved && (
                <Button variant="info" className="badge">Reserved</Button>
              )}
              <p>{rocket.description}</p>
              {rocket.reserved ? <Button variant="outline-secondary" size="md" onClick={() => dispatch(reserveRocket(rocket.id))}>Cancel Reservation Rocket</Button> : <Button variant="primary" size="md" onClick={() => dispatch(reserveRocket(rocket.id))}>Reserve Rocket</Button> }
            </Col>
          </Row>
        ))
      }
    </Container>
  );
}
