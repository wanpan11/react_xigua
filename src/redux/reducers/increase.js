const initState = {
    count: 0
};


// Reducer
function increase(state = initState, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        default:
            return state
    }
}

export { increase }