import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import AsyncComponent from './AsyncComponent';
import NavBar from './components/nav-bar/index';

const loader = () => {
    return new Promise(resolve => {
        require.ensure([], () => {
            resolve(require('./components/homepage/index'));
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

const asyncLoader = (p) => () => (
    new Promise(resolve => {
        require.ensure([], () => {
            resolve(import(`./components/${p}/index`));
        })
    })
);

export default () => (
    <BrowserRouter>
        <div className="container _block">
            <div className="container _nav">
                <NavBar/>
            </div>
            <div className="container _main">
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => <AsyncComponent loader={asyncLoader('homepage')} />}/>
                    <Route
                        path="/logout"
                        component={() => <AsyncComponent loader={asyncLoader('logout')} />}/>
                </Switch>
            </div>
        </div>
    </BrowserRouter>
)