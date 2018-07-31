import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import budgetReducer from './reducers/budgetReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import {loadAuthToken} from './local-storage';
import entryReducer from './reducers/entryReducer';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: auth,
        reducer: budgetReducer,
        entry: entryReducer
    
    
    }), composeWithDevTools(applyMiddleware(thunk)));

    const authToken = loadAuthToken();
    if (authToken) {
        const token = authToken;
        store.dispatch(setAuthToken(token));
        store.dispatch(refreshAuthToken());
    }


export default store;