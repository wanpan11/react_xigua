import { increase } from "./actionTypes";

let nextTodoId = 0;

export const increase_action = content => ({
    type: increase,
    payload: {
        id: ++nextTodoId,
        content
    }
});


