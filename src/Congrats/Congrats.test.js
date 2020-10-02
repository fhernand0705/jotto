import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../../test/testUtils'; 

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props}
    return shallow(<Congrats {...setupProps} />)
}

test("render congrats component without errors", () => {
    const wrapper = setup({ success: false }); 
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

test("does not throw warning with expected props", () => {
    const expectedProps = { success: true };
    
    checkProps(Congrats, expectedProps)
})