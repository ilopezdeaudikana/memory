import { Card, CardsState } from './../../models/models';
import { MemoryActions } from '../actions/actions';
import { cardsReducer } from './cards.reducer';

const card: Card = { id: 5, value: 9 };

const initialState: CardsState = {
  list: [],
  isAnimationOn: false,
  visible: [],
  paired: [],
};
describe('cardsReducer', () => {
  it('should set cards', () => {
    const state = cardsReducer(initialState, {
      type: MemoryActions.SET_CARDS,
      payload: [card],
    });
    expect(state.list).toEqual([card]);
  });

  it('should select a card', () => {
    const state = cardsReducer(initialState, {
      type: MemoryActions.SELECT_CARD,
      payload: card,
    });
    expect(state.visible).toEqual([card]);
  });

  it('should add cards to paired', () => {
    const newState = { ...initialState, visible: [card] };
    const state = cardsReducer(newState, {
      type: MemoryActions.SELECT_CARD,
      payload: { ...card, id: 50 },
    });
    expect(state.paired).toEqual([card, { id: 50, value: 9 }]);
  });

  it('should toggle isAnimationOn', () => {
    const state = cardsReducer(initialState, {
      type: MemoryActions.TOGGLE_IS_ANIMATION_ON,
      payload: true,
    });
    expect(state.isAnimationOn).toBe(true);
  });

  it('should reset visible, paired and isAnimationOn', () => {
    const newState = { list: [], visible: [card], paired: [card], isAnimationOn: true };
    const state = cardsReducer(newState, {
      type: MemoryActions.RESET_CARDS,
      payload: null,
    });
    expect(state.isAnimationOn).toBe(false);
    expect(state.paired).toEqual([]);
    expect(state.visible).toEqual([]);
  });

  it('should reset visible', () => {
    const newState = { ...initialState, visible: [card] };
    const state = cardsReducer(newState, {
      type: MemoryActions.RESET_VISIBLE_CARDS,
      payload: null,
    });
    expect(state.visible).toEqual([]);
  });

  it('should do nothing', () => {
    const state = cardsReducer(initialState, {
      type: 'DUMMY_ACTION',
      payload: [card],
    });
    expect(state.list).toEqual([]);
  });
});
