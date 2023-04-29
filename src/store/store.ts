import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './slices/cards-slice';
import userReducer from './slices/user-slice'
import scoreReducer from './slices/score-slice'

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    user: userReducer,
    score: scoreReducer
  }
});

