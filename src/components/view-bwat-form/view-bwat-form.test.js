import React from 'react';
import { shallow } from 'enzyme';
import ViewBWATForm from './view-bwat-form';
import {API_BASE_URL} from '../../config.js';

describe('<ViewBWATForm />', () => {
  it('Renders without crashing', () => {
    shallow(<ViewBWATForm />);
  });
});

it('Renders the add  initially', () => {
    const wrapper = shallow(<ViewBWATForm />);
    expect(wrapper.hasClass('form')).toEqual(true);
});

it('Should render the forms when client selected', () => {
        const wrapper = shallow(<ViewBWATForm />);
        expect(wrapper.state('form').isEmpty()).to.equal(false);
        expect(wrapper.client('forms')).toEqual(true);
        expect(wrapper.state('clients').length.greaterThan(0);
});

jest.mock('axios', () => {
  const form = [
    //update with a form {first_name: 'New Client', last_name: 'New', hospital_name: 'Hospital', city: 'Chicago', client_state: 'Ilinois', start_date: 2018-03-09T06:00:00.000Z, end_date: 2018-03-13T05:00:00.000Z,age: 12,weight: 21}
  ];

  return {
    get: jest.fn(() => Promise.resolve(form)),
  };
});

const axios = require('axios');

it('fetch form on #componentDidMount', () => {
  const wrapper = shallow(<ViewBWATForm />);
  wrapper.instance().componentDidMount().then(() => {
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(`${API_BASE_URL}/forms`);
    // expect(app.state()).toHaveProperty('clients', [
    //         {first_name: 'New Client', last_name: 'New', hospital_name: 'Hospital', city: 'Chicago', client_state: 'Ilinois', start_date: 2018-03-09T06:00:00.000Z, end_date: 2018-03-13T05:00:00.000Z,age: 12,weight: 21}
    // ]);
    expect(wrapper.state('form').isEmpty()).to.equal(false);
    expect(wrapper.state('questionValues').isEmpty()).to.equal(false);
    expect(wrapper.state('client').isEmpty()).to.equal(false);

    done();
  });
});
