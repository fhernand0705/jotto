import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../actions';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export class UnconnectedInput extends Component {
    constructor(props) {
        super(props);

        this.state = { currentGuess: null }
    }

    submitGuessedWord = (e) => {
        e.preventDefault();
        const guessedWord = this.state.currentGuess;
        
        if (guessedWord && guessedWord > 0) {
            this.props.guessWord(guessedWord);
            this.setState({ currentGuess: null });
        }
    }
        render() {
                const contents = this.props.success ? null :
            (
                <form className="form-inline" > 
                    <input 
                        type="text" 
                        data-test="input-field"
                        value={this.state.currentGuess}
                        onChange={(e) => this.setState({ currentGuess: e.target.value })}
                        placeholder="enter your guess"
                    />
                    <button 
                        variant="primary" 
                        type="submit" 
                        data-test="submit-button"
                        onClick={this.submitGuessedWord}
                    >
                        Guess
                    </button>
                </form>
            )
            return (
                <div data-test="component-input">
                    {contents}
                </div>
            )
        }
    
}

const mapStateToProps = ({ success }) => {
    return { success }; 
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput); 