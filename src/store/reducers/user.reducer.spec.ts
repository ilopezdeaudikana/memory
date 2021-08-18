import { User } from './../../models/models';
import { MemoryActions } from '../actions/actions';
import { userReducer } from './user.reducer';

const user: User = { id: 14, name: 'User name' };

describe('userReducer', () => {
  it('should set a user', () => {
    const state = userReducer({} as User, {
      type: MemoryActions.SET_USER,
      payload: user,
    });
    expect(state).toEqual(user);
  });

  it('should do nothing', () => {
    const state = userReducer({} as User, {
      type: 'DUMMY_ACTION',
      payload: user,
    });
    expect(state.name).not.toBeDefined();
  });
});
