**react全家桶**

~~~
/* 合并 store 后每次 dispatch 被调用时 都会调用所有 reducers  */
// 所有的 reducers 在 dispatch 调用时都会被执行 区分他们的只是type

import test_1 from './test_1'
import test_2 from './test_2'

export const reducers = combineReducers({ test_1, test_2 });
const store = createStore(reducers)

~~~


