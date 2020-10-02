import React from 'react';
import PropTypes from 'prop-types'; 
import Table from 'react-bootstrap/Table';

const GuessedWords = ({ guessedWords }) => {
    let contents; 
    if (!guessedWords.length) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret!
            </span>
        );
    } else {
        const guessedWordsRows = guessedWords.map(({guessedWord, letterMatchCount}, i) => (
        <tr data-test="guessed-word" key={i}>
            <td>{guessedWord}</td>
            <td>{letterMatchCount}</td>
        </tr>
        ))

        contents = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Guessed</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guessedWordsRows}
                    </tbody>
                </Table>
            </div>
        )
    }
    return (
        <div data-test="component-guessed-word">
            { contents }
        </div>
    )
};

export default GuessedWords;

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};