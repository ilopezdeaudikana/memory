import { useScore } from './use-score'
import { render, cleanup, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import * as Redux from 'react-redux'

jest.mock('react-redux', () => {
  return {
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
    useSelector: jest.fn()
  }
})

const TestComponent = () => {
  useScore()
  return <div></div>
}

afterEach(cleanup)

const mockDispatch = {
  dispatch: jest.fn()
}
let store: MockStoreEnhanced<unknown, {}>
let dispatch: jest.SpyInstance<any, any, any>

describe('useScore hook', () => {
  beforeEach(() => {
    ;(Redux.useDispatch as jest.Mock).mockImplementation(() => {
      return mockDispatch.dispatch
    })

    const mockStore = configureStore()

    store = mockStore({
      cards: {}
    })

    dispatch = jest.spyOn(mockDispatch, 'dispatch')
  })

  it('should dispatch', async () => {
    const selector = jest.spyOn(Redux, 'useSelector');
    (Redux.useSelector as jest.Mock).mockReturnValue({
      paired: [
        { id: 1, value: 12 },
        { id: 10, value: 12 }
      ],
      list: [
        { id: 1, value: 12 },
        { id: 10, value: 12 }
      ]
    });
    render(
      <Redux.Provider store={store}>
        <BrowserRouter>
          <TestComponent />
        </BrowserRouter>
      </Redux.Provider>
    )
    await waitFor(() => expect(selector).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(dispatch).toHaveBeenCalledTimes(1))
  })

  it('should not dispatch', async () => {
    ;(Redux.useSelector as jest.Mock).mockReturnValue({ paired: [], list: [] })

    render(
      <Redux.Provider store={store}>
        <BrowserRouter>
          <TestComponent />
        </BrowserRouter>
      </Redux.Provider>
    )
    await waitFor(() => expect(dispatch).not.toHaveBeenCalled())
  })

  it('should also not dispatch', async () => {
    ;(Redux.useSelector as jest.Mock).mockReturnValue({
      paired: [
        { id: 1, value: 12 },
        { id: 10, value: 12 }
      ],
      list: [
        { id: 1, value: 12 },
        { id: 10, value: 12 },
        { id: 14, value: 16 },
        { id: 15, value: 8 }
      ]
    })

    render(
      <Redux.Provider store={store}>
        <BrowserRouter>
          <TestComponent />
        </BrowserRouter>
      </Redux.Provider>
    )
    await waitFor(() => expect(dispatch).not.toHaveBeenCalled())
  })
})
