import * as actions from '../actions/budgets'

const initialState = {
    listOfEntries: []
};

export default function budgetReducer(state=initialState, action) {
    if (action.type === actions.ADD_BUDGET_ENTRY) {
        return Object.assign({}, state, {
            listOfEntries: action.listOfEntries
        })
    }
    else if (action.type === actions.FETCH_DASHBOARD_SUCCESS) {
        return Object.assign({}, state, {
            listOfEntries: action.list
        })
    }
    return state;
}