import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../actions';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

class Input extends Component {
        render() {
                const contents = this.props.success ? null :
            (
                <Form className="form-inline"> 
                    <InputGroup type="text" data-test="input-field"/>
                    <Button 
                        variant="primary" 
                        type="submit" 
                        data-test="submit-button">
                        Guess
                    </Button>
                </Form>
            )
            return (
                <div data-test="component-input">
                    {contents}
                </div>
            )
        }
    
}

const mapStateToProps = (state) => {
    return state; 
}

export default connect(mapStateToProps, { guessWord })(Input); 