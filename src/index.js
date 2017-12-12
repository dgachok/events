import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import App from './App/index';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import {reducers} from './App/reducer';
import 'rxjs';

//thunk
import thunk from 'redux-thunk';

//redux observable
import {createEpicMiddleware} from 'redux-observable';
import {epic} from './App/epic';

//mui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import createHistory from 'history/createBrowserHistory'

const history = createHistory();

const middleware = routerMiddleware(history);

const epicMiddleware = createEpicMiddleware(epic);

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(thunk, epicMiddleware, middleware));

export default store;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
