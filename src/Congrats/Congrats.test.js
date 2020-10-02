import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import { findByTestAttr } from '../../test/testUtils'; 

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
    return shallow(<Congrats {...props} />)
}

test("render congrats component without errors", () => {
    const wrapper = setup(); 
    const component = findByTestAttr(wrapper, 'congrats-component');

    expect(component.length).toBe(1);
})

test("renders no text when `success` prop is false", () => {
    const wrapper = setup({ success: false });
    const noText = findByTestAttr(wrapper, 'congrats-component').text();

    expect(noText).toBe('')
})

test("renders non-empty congrats message when `success` prop is true", () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message').text();

    expect(message.length).not.toBe(0);
})