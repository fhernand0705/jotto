import React from 'react';

const Congrats = ({ success }) => {
    return (
        <> 
            {success ? 
                <div data-test="congrats-message">
                    Congratulations! You guessed the word!
                </div> : 
                <div data-test="congrats-component"></div> 
            } 
        </>
    )
}

export default Congrats; 