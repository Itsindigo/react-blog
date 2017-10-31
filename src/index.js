import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';


import reducers from './reducers';
import BlogIndex from './components/blog_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <h1>React Blog</h1>
        <Route path='/' component={BlogIndex} />
        {/* {<Route path='/blog/:id' component={BlogDetail} />} */}
        {/* <Route path='/blog/new' component={BlogNew} /> */}
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
