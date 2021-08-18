import { useScore } from './use-score';
import { render, cleanup, waitFor } from '@testing-library/react';
import * as reactRedux from 'react-redux';

const TestComponent = () => {
  useScore();
  return <div></div>;
};

afterEach(cleanup);

let useSelectorMock: any;
let useDispatchMock: any;
let mockedDispatch: any;
describe('useScore hook', () => {
  beforeEach(() => {
    mockedDispatch = jest.fn();
    useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    (useDispatchMock as jest.Mock).mockReturnValue(mockedDispatch);
  });

  it('should dispatch', async () => {
    (useSelectorMock as jest.Mock).mockReturnValue({
      paired: [
        { id: 1, value: 12 },
        { id: 10, value: 12 },
      ],
      list: [
        { id: 1, value: 12 },
        { id: 10, value: 12 },
      ],
    });
    render(<TestComponent />);
    await waitFor(() => expect(mockedDispatch).toHaveBeenCalledTimes(1));
  });

  it('should not dispatch', async () => {
    (useSelectorMock as jest.Mock).mockReturnValue({ paired: [], list: [] });
    render(<TestComponent />);
    await waitFor(() => expect(mockedDispatch).not.toHaveBeenCalled());
  });

  it('should also not dispatch', async () => {
    (useSelectorMock as jest.Mock).mockReturnValue({
      paired: [
        { id: 1, value: 12 },
        { id: 10, value: 12 },
      ],
      list: [
        { id: 1, value: 12 },
        { id: 10, value: 12 },
        { id: 14, value: 16 },
        { id: 15, value: 8 },
      ],
    });
    render(<TestComponent />);
    await waitFor(() => expect(mockedDispatch).not.toHaveBeenCalled());
  });
});
