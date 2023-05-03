import './App.scss';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game, Score, Home } from './views';
import { store } from './store/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div data-testid='App' className='page'>
          <Routes>
            <Route path='/game' element={<Game />} />
            <Route path='/score' element={<Score />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
