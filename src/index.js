import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './store';
import ItemList from './components/ItemList';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ItemList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
