import React from 'react';
import {
  Container, Col, Row, Button,
} from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';

export default function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets);
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
              <Button variant="primary" size="md">Reserve Rocket</Button>
            </Col>
          </Row>
        ))
      }
    </Container>
  );
}
