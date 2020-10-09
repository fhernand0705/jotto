import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getSecretWord } from './actions';

import GuessedWords from './GuessedWords/GuessWords';
import Congrats from './Congrats/Congrats';
import Input from './Input/Input';

export class UnconnectedApp extends Component {

  componentDidMount() {
    this.props.getSecretWord()
  };
  
  render() {
    return (
      <Container fluid="lg">
        <h1>Jotto</h1>
        <Row>
          <Col><Congrats success={this.props.success}/></Col>
        </Row>
        <Row>
          <Col><Input /></Col>
        </Row>
        <Row>
          <Col md={6}><GuessedWords guessedWords={this.props.guessedWords}/></Col>
        </Row>
      </Container>
    );
  } 

}

const mapStateToProps = (state) => {
  return state; 
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
