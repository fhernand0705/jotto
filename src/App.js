import React from 'react';
import './App.css';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GuessedWords from './GuessedWords/GuessWords';
import Congrats from './Congrats/Congrats';

function App() {
  const props = [{ guessedWord: 'train', letterMatchCount: 2}]

  return (
    <Container fluid="lg">
      <h1>Jotto</h1>
      <Row>
        <Col><Congrats success={false}/></Col>
      </Row>
      <Row>
        <Col md={6}><GuessedWords guessedWords={props}/></Col>
      </Row>
    </Container>
  );
}

export default App;
