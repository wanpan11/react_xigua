import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import App from './app';

ReactDOM.render(
  <Provider store={store}>
    <App title='wanpan' />
  </Provider>,
  document.getElementById('root'),
);
