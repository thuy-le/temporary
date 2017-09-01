import React from 'react';
import { Route } from 'react-router';
import AsyncComponent from './AsyncComponent';

const loader = () => {
    return new Promise(resolve => {
        require.ensure([], () => {
            resolve(require('./components/container/index'));
        });
    });
};

const logout = () => {
    return new Promise(resolve => {
        require.ensure([], () => {
            resolve(require('./components/logout/index'));
        });
    })
};

export default () => (
    <div>
        <Route
            path="/"
            component={() => <AsyncComponent loader={loader} />}/>
        <Route
            path="/logout"
            component={() => <AsyncComponent loader={logout} />}/>
    </div>
)