import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const getBudgets = user => dispatch => {
    return fetch(`${API_BASE_URL}/budgets`)
    .then(res => res.json()
    .then(res => dispatch(fetchDashboardSuccess(res)))
)}

export const addBudget = budgetEntry => dispatch => {
    return fetch(`${API_BASE_URL}/budgets`, {
        method: 'POST',
        headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify(budgetEntry)
    })  
}

export const editBudget = (id, budgetEntry) => dispatch => {
    return fetch(`${API_BASE_URL}/budgets/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(budgetEntry)
    })
    .then(res => dispatch(getBudgets()))
}


export const deleteBudget = (id) => dispatch => {
    return fetch(`${API_BASE_URL}/budgets/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then(res => dispatch(getBudgets())
)}


export const FETCH_DASHBOARD_SUCCESS = "FETCH_DASHBOARD_SUCCESS";
export const fetchDashboardSuccess = list => ({
    type: FETCH_DASHBOARD_SUCCESS,
    list
});



export const ADD_BUDGET_ENTRY = "ADD_BUDGET_ENTRY"
export const addBudgetEntry = placeholder => ({
    type: ADD_BUDGET_ENTRY,
    placeholder
})

