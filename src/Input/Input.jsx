import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Input = () => {
    const success = useSelector(({ success }) => success);
    
    const contents = success ? null :
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

export default Input; 