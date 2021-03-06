//引入依赖
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';

//引入初始化样式
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './static/style/init.scss';

//引入组件
import App from './App';


//将组件渲染到页面1
ReactDOM.render(<App />, document.getElementById('root'));

/* 监听store变化 */
store.subscribe(() => {
  console.log(store.getState());
  ReactDOM.render(<App />, document.getElementById('root'));
});
