import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Tech from './components/tech';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


export default class App extends Component {
  render() {
    return (
      <Tech />
    );
  }
}


ReactDOM.render( <App />, document.querySelector('.container'));
