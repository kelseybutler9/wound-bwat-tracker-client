import React from 'react';
import { shallow } from 'enzyme';
import ViewAllForms from './view-all-forms';
import {API_BASE_URL} from '../../config.js';

describe('<ViewAllForms />', () => {
  it('Renders without crashing', () => {
    shallow(<ViewAllForms />);
  });

  it('Should render the forms when client selected', () => {
          const wrapper = shallow(<ViewAllForms />);
          //wrapper.find('select').simulate('keyDown', { keyCode: 40 });
          wrapper.setState({
            clientSelected: true,
            clientId: '5a6541b39293b078f266ae57',
            forms: {
             "client_id": '5a6541b39293b078f266ae57',
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
            }
          });
          wrapper.update();
          expect(wrapper.state('clientSelected')).toEqual(true);
          expect(wrapper.state('clientId')).equals('').to.equal(false);
          expect(wrapper.state('forms')).isEmpty().to.equal(false);
  });
});



// jest.mock('axios', () => {
//   const clients = [
//     {first_name: 'New Client', last_name: 'New', hospital_name: 'Hospital', city: 'Chicago', client_state: 'Ilinois', start_date: '2018-03-09T06:00:00.000Z', end_date: '2018-03-13T05:00:00.000Z', age: 12, weight: 21}
//   ];
//
//   return {
//     get: jest.fn(() => Promise.resolve(clients)),
//   };
// });
//
// const axios = require('axios');
//
// it('fetch clients on #componentDidMount', async() => {
//   const wrapper = shallow(<ViewAllForms />);
//   await wrapper.instance().componentDidMount()
//     expect(axios.get).toHaveBeenCalled();
//     expect(axios.get).toHaveBeenCalledWith(`${API_BASE_URL}/clients`);
//     expect(wrapper.state()).toHaveProperty('clients', [
//             {first_name: 'New Client', last_name: 'New', hospital_name: 'Hospital', city: 'Chicago', client_state: 'Ilinois', start_date: '2018-03-09T06:00:00.000Z', end_date: '2018-03-13T05:00:00.000Z', age: 12,weight: 21}
//     ]);
// });
