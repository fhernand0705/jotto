import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input, { UnconnectedInput } from './Input';

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive().dive();
    return wrapper; 
}

describe("renders", () => {
    describe("word has not been guessed", () => {
        let wrapper; 

        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        })
        
        test("render component without errors", () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        })

        test("renders input field", () => {
            const inputField = findByTestAttr(wrapper, 'input-field');
            expect(inputField.length).toBe(1);
        })

        test("renders submit button", () => {
            const submitButton = findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toBe(1);
        })
    })

    describe("word has been guessed", () => {
        let wrapper; 

        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        })

        test("render component without errors", () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        })

        test("does not render input field", () => {
            const inputField = findByTestAttr(wrapper, 'input-field');
            expect(inputField.length).toBe(0);
        })

        test("does not render submit button", () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(0);    
        })
    })
});

describe("redux props", () => {
    test("has success piece of state as a prop", () => {
        const success = true; 
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        
        expect(successProp).toBe(success)
    })

    test("`guessWord` action creator is a function prop", () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord

        expect(guessWordProp).toBeInstanceOf(Function)
    })
});

describe("`guessWord` action creator call", () => {
    let guessWordMock;
    let wrapper; 
    const guessedWord = "train";

    beforeEach(() => {
        guessWordMock = jest.fn();
        wrapper = shallow(<UnconnectedInput guessWord={guessWordMock}/>);

        wrapper.setState({ currentGuess: guessedWord });
        
        const submit = findByTestAttr(wrapper, "submit-button");

        submit.simulate('click', { preventDefault() {} });
    })
    
    test("`guessWord` runs on submit click", () => {
        const guessWordCallCount = guessWordMock.mock.calls.length;
        expect(guessWordCallCount).toBe(1);
    })
    
    test("calls `guessWord` with input value as argument", () => {
        const guessWordArg = guessWordMock.mock.calls[0][0];
        expect(guessWordArg).toBe(guessedWord);
    })
})
