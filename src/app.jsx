import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { test_1_action } from './redux/action/action';
// import Form from './pages/formDemo';
import DragImage from './pages/dragImage';
import SetState from './pages/setState';

function App(props) {
  //
  const { dispatch, test_1, test_2 } = props;

  useEffect(() => {
    test_1_action(dispatch, 200);
  }, [dispatch]);

  return (
    <div style={{ padding: '20px 32px' }}>
      <h1>react-redux</h1>
      <div>store: {test_1.count}</div>
      <div>store: {test_2.name}</div>
      <hr />
      {/* <Form /> */}
      <hr />
      <DragImage />
      <hr />
      <SetState />
    </div>
  );
}

export default connect(
  (state) => {
    return { ...state };
  },
  (dispatch) => {
    return { dispatch };
  },
)(App);
