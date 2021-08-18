import { Score } from './../../models/models';
import { MemoryActions } from '../actions/actions';
import { scoreReducer } from './score.reducer';

const score: Score = { value: 80 };

describe('userReducer', () => {
  it('should set a user', () => {
    const state = scoreReducer({value: 0}, {
      type: MemoryActions.SET_SCORE,
      payload: score,
    });
    expect(state.value).toBe(80);
  });

  it('should do nothing', () => {
    const state = scoreReducer({value: 0}, {
      type: 'DUMMY_ACTION',
      payload: score,
    });
    expect(state.value).toBe(0);
  });
});
