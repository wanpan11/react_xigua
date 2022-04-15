import { TEST_2 } from '../action/actionTypes';

/* 默认数据 */
const initState = {
  name: '宛攀',
};

/**
 * reducers
 * @param {Object} state 更新之前的数据
 * @param {Object} action type,data
 * @returns
 */
function test_2(state = initState, action) {
  const { data, type } = action;

  switch (type) {
    case TEST_2:
      return { ...state, name: data };
    default:
      return state;
  }
}

export default test_2;
