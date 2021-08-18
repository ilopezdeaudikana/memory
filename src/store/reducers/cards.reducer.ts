import { Action, CardsState } from '../../models/models';
import { MemoryActions } from '../actions/actions';

export const cardsReducer = (
  state: CardsState = {
    list: [],
    paired: [],
    visible: [],
    isAnimationOn: false,
  },
  action: Action
): CardsState => {
  switch (action.type) {
    case MemoryActions.SET_CARDS:
      return {
        ...state,
        list: action.payload,
      };
    case MemoryActions.SELECT_CARD:
      const newPair =
        state.visible.length && state.visible[0].value === action.payload.value
          ? [state.visible[0], action.payload]
          : [];
      return {
        ...state,
        visible: newPair.length ? [] : state.visible.concat(action.payload),
        paired: state.paired.concat(newPair),
      };
    case MemoryActions.RESET_VISIBLE_CARDS:
      return {
        ...state,
        visible: [],
        isAnimationOn: false,
      };
    case MemoryActions.RESET_CARDS:
      return {
        ...state,
        visible: [],
        isAnimationOn: false,
        paired: [],
      };
    case MemoryActions.TOGGLE_IS_ANIMATION_ON:
      return {
        ...state,
        isAnimationOn: action.payload,
      };
    default:
      return state;
  }
};
