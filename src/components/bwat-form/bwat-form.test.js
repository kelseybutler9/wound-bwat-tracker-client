import React from 'react';
import { shallow } from 'enzyme';
import BWATForm from './bwat-form';
import {API_BASE_URL} from '../../config.js';

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

jest.mock('axios', () => {
  const clients = [
    {first_name: 'New Client', last_name: 'New', hospital_name: 'Hospital', city: 'Chicago', client_state: 'Ilinois', start_date: 2018-03-09T06:00:00.000Z, end_date: 2018-03-13T05:00:00.000Z,age: 12,weight: 21}
  ];

  return {
    get: jest.fn(() => Promise.resolve(clients)),
  };
});

const axios = require('axios');

it('fetch clients on #componentDidMount', () => {
  const wrapper = shallow(<BWATForm />);
  wrapper.instance().componentDidMount().then(() => {
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(`${API_BASE_URL}/clients`);
    expect(app.state()).toHaveProperty('clients', [
            {first_name: 'New Client', last_name: 'New', hospital_name: 'Hospital', city: 'Chicago', client_state: 'Ilinois', start_date: 2018-03-09T06:00:00.000Z, end_date: 2018-03-13T05:00:00.000Z,age: 12,weight: 21}
    ]);
    done();
  });
});
