import * as actions from '../actions/budgets'

const initialState = {
    entry: {}
};

export default function budgetReducer(state=initialState, action) {
    if (action.type === actions.FETCH_SINGLE_BUDGET_SUCCESS) {
        return Object.assign({}, state, {
            entry: action.singleEntry
        })
    }
    
    return state;
}