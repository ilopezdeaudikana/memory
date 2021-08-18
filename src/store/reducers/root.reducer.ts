import { combineReducers } from 'redux';
import { cardsReducer } from './cards.reducer';
import { userReducer } from './user.reducer';
import { scoreReducer } from './score.reducer';

export default combineReducers({
  cards: cardsReducer,
  user: userReducer,
  score: scoreReducer
});
