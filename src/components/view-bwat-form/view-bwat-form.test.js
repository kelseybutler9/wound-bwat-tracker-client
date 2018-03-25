import React from 'react';
import { shallow } from 'enzyme';
import ViewBWATForm from './view-bwat-form';
import {API_BASE_URL} from '../../config.js';

describe('<ViewBWATForm />', () => {
  it('Renders without crashing', () => {
    shallow(<ViewBWATForm />);
  });
});

jest.mock('axios', () => {
  const form = [{
   "client_id": 321,
   "date_of_form": "2018-03-09T06:00:00.000Z",
   "wound_location": "Heel",
   "shape_of_wound": "Irregular",
   "question_one": 1,
   "question_two": 2,
   "question_three": 0,
   "question_four": 4,
   "question_five": 1,
   "question_six": 0,
   "question_seven": 1,
   "question_eight": 2,
   "question_nine": 3,
   "question_ten": 3,
   "question_eleven": 0,
   "question_twelve": 0,
   "question_thirteen": 3,
   "score": 30
  }];

  return {
    get: jest.fn(() => Promise.resolve(form)),
  };
});

const axios = require('axios');

it('fetch form on #componentDidMount', () => {
  const wrapper = shallow(<ViewBWATForm />);
  // wrapper.instance().componentDidMount().then(() => {
  //   expect(axios.get).toHaveBeenCalled();
  //   expect(axios.get).toHaveBeenCalledWith(`${API_BASE_URL}/forms`);
  //   // expect(app.state()).toHaveProperty('clients', [
  //   //         {first_name: 'New Client', last_name: 'New', hospital_name: 'Hospital', city: 'Chicago', client_state: 'Ilinois', start_date: 2018-03-09T06:00:00.000Z, end_date: 2018-03-13T05:00:00.000Z,age: 12,weight: 21}
  //   // ]);
  //   expect(wrapper.state('form').isEmpty()).to.equal(false);
  //   expect(wrapper.state('questionValues').isEmpty()).to.equal(false);
  //   expect(wrapper.state('client').isEmpty()).to.equal(false);
  //
  //   done();
  // });
  await wrapper.instance().componentDidMount()
  expect(wrapper.state(`form`)).toEqual({
   "client_id": 321,
   "date_of_form": "2018-03-09T06:00:00.000Z",
   "wound_location": "Heel",
   "shape_of_wound": "Irregular",
   "question_one": 1,
   "question_two": 2,
   "question_three": 0,
   "question_four": 4,
   "question_five": 1,
   "question_six": 0,
   "question_seven": 1,
   "question_eight": 2,
   "question_nine": 3,
   "question_ten": 3,
   "question_eleven": 0,
   "question_twelve": 0,
   "question_thirteen": 3,
   "score": 30
  });
  expect(wrapper.state(`questionValues`)).isEmpty().toEqual(false);
  expect(wrapper.state(`client`)).isEmpty().toEqual(false);
});
