import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import App from './App/index';
import {reducer} from './App/reducer';
import {BrowserRouter as Router} from 'react-router-dom';
import 'rxjs';

//thunk
import thunk from 'redux-thunk';

//redux observable
import {createEpicMiddleware} from 'redux-observable';
import {epic} from './App/epic';

//mui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const epicMiddleware = createEpicMiddleware(epic);

const store = createStore(reducer, applyMiddleware(thunk, epicMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
