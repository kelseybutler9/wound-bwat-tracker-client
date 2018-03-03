import * as actions from './actions';

const initialState = {
  score: 0
}

export const appReducer = (state = initialState, action) => {
  if(action.type === actions.GENERATE_SCORE) {
    console.log(`scores: ${action.scores}`);
    action.scores.forEach(scoreItem => (
      action.score += scoreItem + 1
    ));
    console.log(action.score);
    return Object.assign({}, state, {
      score: action.score
    });
  }
  else if (action.type === actions.FETCH_ITEM_SUCCESS) {
       return action.clients;
   }
   return state;
};
