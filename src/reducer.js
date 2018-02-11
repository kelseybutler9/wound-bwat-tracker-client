import {GENERATE_SCORE} from './actions';

const initialState = {
  score: ''
}

export const appReducer = (state = initialState, action) => {
  if(action.type === GENERATE_SCORE) {
    console.log(state);
    let updatedScore = 30;
    return Object.assign({}, state, {
      score: updatedScore
    });
  }
  return state;
};
