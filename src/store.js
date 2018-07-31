import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import budgetReducer from './reducers/budgetReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import {loadAuthToken} from './local-storage';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: auth,
        reducer: budgetReducer
    
    
    }), composeWithDevTools(applyMiddleware(thunk)));




export default store;