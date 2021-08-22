import './App.scss';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Game, Score, Home } from './pages';
import { store } from './store/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div data-testid='App' className='page'>
          <Switch>
            <Route path='/game' component={Game} />
            <Route path='/score' component={Score} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
