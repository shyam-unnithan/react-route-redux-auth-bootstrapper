import { combineReducers } from 'redux';
import { authentication } from './auth-reducers';

const rootReducer = combineReducers({
    authentication: authentication,
});

export default rootReducer;
