
import {API_BASE_URL} from './config.js';

export const GENERATE_SCORE = 'GENERATE_SCORE';
export const generateScore = score => ({
  type: GENERATE_SCORE,
  score
});


export const fetchClients = () => dispatch => {
  fetch(`${API_BASE_URL}/clients`)
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(clients => {
      dispatch(console.log('success'));
    });
};

export const fetchForms = () => dispatch => {
  fetch(`${API_BASE_URL}/forms`)
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(forms => {
      dispatch(console.log('success'));
    })
};

export const fetchForm = (id) => dispatch => {
  fetch(`${API_BASE_URL}/forms/${id}`)
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(form => {
      dispatch(console.log('success'));
    })
};

export const fetchClient = (id) =>  dispatch => {
  fetch(`${API_BASE_URL}/clients/${id}`)
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(client => {
      dispatch(console.log('success'));
    })
};
