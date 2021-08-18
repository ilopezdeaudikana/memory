import './App.scss';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { Game, Score, Home } from './pages';
import { store } from './store/store';
import { history } from './history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div data-testid='App' className='page'>
          <Switch>
            <Route path='/game' component={Game} />
            <Route path='/score' component={Score} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
