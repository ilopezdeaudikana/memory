import { Action, Score } from '../../models/models';
import { MemoryActions } from '../actions/actions';

export const scoreReducer = (
  state: Score = { value: 0 },
  action: Action
): Score => {
  switch (action.type) {
    case MemoryActions.SET_SCORE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
