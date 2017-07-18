import React from 'react';
import { Route } from 'react-router';
import Container from './components/container/index';

export default () => (
    <Route>
        <Route path="/" component={Container}/>
    </Route>
)