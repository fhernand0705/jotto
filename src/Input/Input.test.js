import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from './Input';

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>);
    return wrapper; 
}

setup()

describe("renders", () => {
    describe("word has not been guessed", () => {
        test("render component without errors", () => {
            
        })
        test("renders input field", () => {

        })
        test("renders submit button", () => {

        })
    })

    describe("word has been guessed", () => {
        test("render component without errors", () => {
            
        })
        test("does not render input field", () => {

        })
        test("does not render submit button", () => {
            
        })
    })
});

describe("updates state", () => {

});
