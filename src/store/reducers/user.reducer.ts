import { Action, User } from "../../models/models";
import { MemoryActions } from '../actions/actions';

export const userReducer = (
  state: User = { id: 0, name: '' },
  action: Action
): User => {
  switch (action.type) {
    case MemoryActions.SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};


