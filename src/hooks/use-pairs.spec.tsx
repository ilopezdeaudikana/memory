import { usePairs } from './use-pairs';
import { render, cleanup, waitFor } from '@testing-library/react';
import * as Redux from 'react-redux';

jest.mock('react-redux', () => {
  return {
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
    useSelector: jest.fn()
  }
})

const TestComponent = () => {
  usePairs();
  return <div></div>;
};

afterEach(cleanup);

const mockDispatch = {
  dispatch: jest.fn()
}
let dispatch: jest.SpyInstance<any, any, any>

describe('UsePairs hook', () => {

  beforeEach(() => {
    ;(Redux.useDispatch as jest.Mock).mockImplementation(() => {
      return mockDispatch.dispatch
    })
    dispatch = jest.spyOn(mockDispatch, 'dispatch')
  })

  it('should dispatch', async () => {
    (Redux.useSelector as jest.Mock).mockReturnValue({
        visible: [
          { id: 1, value: 12 },
          { id: 10, value: 11 },
        ],
      },
    );
    render(<TestComponent />);
    await waitFor(() => expect(dispatch).toHaveBeenCalledTimes(1));
  });

  it('should not dispatch', async () => {
    (Redux.useSelector as jest.Mock).mockReturnValue(
       { visible: [] },
    );
    render(<TestComponent />);
    await waitFor(() => expect(dispatch).not.toHaveBeenCalled());
  });
});
