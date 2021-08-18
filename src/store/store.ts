import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/root.reducer';

export const configureStore = (() => {
  return createStore(
    rootReducer,
    composeWithDevTools()
  );

});

export const store = configureStore();
