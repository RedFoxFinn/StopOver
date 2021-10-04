import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

import store from './controllers/redux/store';
import { client } from './controllers/graphql/client';
import {
  appid,
  appname,
  version
} from '../package.json';
import {StopOver} from './stopOver';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ApolloProvider client={client} >
        <StopOver id={appid} ver={version} />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
