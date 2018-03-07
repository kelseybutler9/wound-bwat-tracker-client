
import {API_BASE_URL} from './config.js';

export const GENERATE_SCORE = 'GENERATE_SCORE';
export const generateScore = (scores, score) => ({
  type: GENERATE_SCORE,
  scores,
  score
});

export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const fetchitemsuccess = clients => ({
  type: FETCH_ITEM_SUCCESS,
  clients
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
      dispatch(fetchitemsuccess(clients));
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
      dispatch(fetchitemsuccess(forms));
    })
};

export const fetchForm = (id) => dispatch => {
  console.log(API_BASE_URL);
  fetch(`${API_BASE_URL}/forms/${id}`)
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(form => {
      dispatch(fetchitemsuccess(form));
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
      dispatch(fetchitemsuccess(client));
    })
};
