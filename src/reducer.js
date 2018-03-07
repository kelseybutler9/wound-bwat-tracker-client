import * as actions from './actions';

const initialState = {
  score: 0
}

export const appReducer = (state = initialState, action) => {
  if(action.type === actions.GENERATE_SCORE) {
    let newScore = 13;
    action.scores.forEach(scoreItem => {
      let item = Number(scoreItem);
      newScore += item;
    });
    action.score = newScore;
    console.log(newScore);
    return Object.assign({}, state, {
      score: action.score
    });
  }
  else if (action.type === actions.FETCH_ITEM_SUCCESS) {
       return action.clients;
   }
   return state;
};
