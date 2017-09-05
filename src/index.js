import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
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
        { routes() }
    </Provider>,
    document.getElementById('root')
);
