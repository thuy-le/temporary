import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(
            sagaMiddleware,
            createLogger()
        )
    )
);
sagaMiddleware.run(rootSaga);

require('lib/style.less');
render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            { routes() }
        </Router>
    </Provider>,
    document.getElementById('root')
);
