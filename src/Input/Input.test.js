import React from 'react';
import { mount } from 'enzyme';
import { Provider }  from 'react-redux';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from './Input';

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = mount(<Provider store={store}><Input /></Provider>);
    return wrapper; 
}

setup()

describe("renders", () => {
    describe("word has not been guessed", () => {
        let wrapper; 

        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        })

        afterEach(() => {
            wrapper.unmount()
        })
        
        test("render component without errors", () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        })

        test("renders input field", () => {
            const inputField = findByTestAttr(wrapper, 'input-field');
            expect(inputField.length).toBe(2);
        })

        test("renders submit button", () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(2);
        })
    })

    describe("word has been guessed", () => {
        let wrapper; 

        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        })

        afterEach(() => {
            wrapper.unmount()
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

describe("updates state", () => {
    
});
