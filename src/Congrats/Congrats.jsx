import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

const Congrats = ({ success }) => {
    return (
        <> 
            {success ? 
                <div data-test="congrats-message">
                    <Alert variant="success">
                        Congratulations! You guessed the word!
                    </Alert>
                </div> : 
                <div data-test="congrats-component"></div> 
            } 
        </>
    )
}

export default Congrats;

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}