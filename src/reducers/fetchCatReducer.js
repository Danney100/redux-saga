const fetchCatReducer = (state = [], action) => {
    switch(action.type) {
        case "FETCH_CAT_SUCCESS":
            return [ 
                ...action.payload,
                ...state
            ]
        case "FETCH_CAT_STARTED":
            return state
        case "FETCH_CAT_ERROR":
            return state
        default:
        return state
    }
}

export default fetchCatReducer;
