import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { test_1_action } from './redux/action/action';
import Form from './pages/formDemo';
import Image from './pages/dragImage';
import SetState from './pages/setState';

function App(props) {
  console.log(props);

  const [name, setName] = useState('wanpan');

  useEffect(() => {
    // console.log(name);
  });

  const setNameFun = (name) => {
    setName(name);
  };

  const { dispatch, test_1_count } = props;

  const test_1_change = () => {
    /* 使用中间件 */
    dispatch(test_1_action(test_1_count + 1));

    /* 不使用中间件 */
    // test_1_action(dispatch, test_1_count + 1)
  };

  return (
    <div>
      <Form />
      <hr />
      <Image />
      <hr />
      <SetState />
    </div>
  );
}

export default connect(
  (state) => {
    return { test_1_count: state.test_1.count };
  },
  (dispatch) => {
    return { dispatch };
  },
)(App);
