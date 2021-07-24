import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/rootreducer';

const logger = createLogger();

const appState = (function () {
    try {
        const appStateStore = localStorage.getItem('appState');
        return appStateStore ? JSON.parse(appStateStore) : {};
    } catch (exception) {
        return {};
    }
})();

export const store = createStore(
    rootReducer,
    { authentication: appState.authentication },
    compose(applyMiddleware(thunk), applyMiddleware(logger))
);

store.subscribe(persistLocal);

//This is to persist user information to the localStorage
//so as to avoid losing state during page refresh
function persistLocal() {
    localStorage.setItem('appState', JSON.stringify(store.getState()));
}
