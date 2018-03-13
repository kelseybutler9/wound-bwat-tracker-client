import React from 'react';
import { shallow } from 'enzyme';

import BWATForm from './bwat-preview';

describe('<BWATForm />', () => {
  it('Renders without crashing', () => {
    shallow(<BWATForm />);
  });
});

it('Renders the add client initially', () => {
        const wrapper = shallow(<BWATForm />);
        expect(wrapper.hasClass('add-client')).toEqual(true);
});

it('Should render the bwat form when client selected', () => {
        const wrapper = shallow(<BWATForm />);
        wrapper.find('select').simulate('keyDown', { keyCode: 40 });
        wrapper.update();
        expect(wrapper.state('clientSelected')).toEqual(true);
        expect(wrapper.state('submitting')).toEqual(false);
});

it('Should switch to success message when the add button is clicked', () => {
        const wrapper = shallow(<BWATForm />);
        wrapper.find('select').simulate('keyDown', { keyCode: 40 });
        wrapper.update();
        wrapper.simulate('submit');
        expect(wrapper.hasClass('success')).toEqual(true);
        expect(wrapper.state('submitting')).toEqual(true);
});
