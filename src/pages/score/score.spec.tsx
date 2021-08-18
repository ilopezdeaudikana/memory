import { Score } from './score';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
afterEach(cleanup);

describe('User Form', () => {
  it('Inputing text enables the button', async () => {
    const mockStore = configureStore();

    const store = mockStore({
      user: { name: 'test user', id: 400 },
      score: { value: 50 },
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <Score />
      </Provider>
    );

    const congrats = getByTestId('congrats');
    expect(congrats).toHaveTextContent('Congratulations: test user');
    const score = getByTestId('score');
    expect(score).toHaveTextContent('Score: 50');
  });
});
