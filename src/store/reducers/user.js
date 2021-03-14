const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLC':
            console.log('it is working');
            return state;
        default:
            return state;
    }
}

export default reducer;