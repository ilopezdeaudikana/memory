import { usePairs } from './use-pairs';
import { render, cleanup, waitFor } from '@testing-library/react';
import * as reactRedux from 'react-redux';

const TestComponent = () => {
  usePairs();
  return <div></div>;
};

afterEach(cleanup);

let useSelectorMock: any;
let useDispatchMock: any;
let mockedDispatch: any;
describe('UsePairs hook', () => {
  beforeEach(() => {
    mockedDispatch = jest.fn();
    useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    (useDispatchMock as jest.Mock).mockReturnValue(mockedDispatch);
  });

  it('should dispatch', async () => {
    (useSelectorMock as jest.Mock).mockReturnValue({
        visible: [
          { id: 1, value: 12 },
          { id: 10, value: 11 },
        ],
      },
    );
    render(<TestComponent />);
    await waitFor(() => expect(mockedDispatch).toHaveBeenCalledTimes(1));
  });

  it('should not dispatch', async () => {
    (useSelectorMock as jest.Mock).mockReturnValue(
       { visible: [] },
    );
    render(<TestComponent />);
    await waitFor(() => expect(mockedDispatch).not.toHaveBeenCalled());
  });
});
