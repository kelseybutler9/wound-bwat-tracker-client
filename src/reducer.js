import * as actions from './actions';

const initialState = {
  score: ''
}

export const appReducer = (state = initialState, action) => {
  if(action.type === actions.GENERATE_SCORE) {
    console.log(state);
    let updatedScore = 30;
    return Object.assign({}, state, {
      score: updatedScore
    });
  }
  else if (action.type === actions.FETCH_ITEM_SUCCESS) {
       return action.clients;
   }
   return state;
};
