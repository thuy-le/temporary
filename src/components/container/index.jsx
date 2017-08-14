import React, { Component } from 'react';
import { browserHistory } from 'react-router';
console.log('Homepage loaded');
require('./style.less');
export default class Container extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.state = {}
        this.toLogout = this.toLogout.bind(this);
    }

    toLogout() {
        browserHistory.push('/logout');
    }

    render() {
        return (
            <div className="container _block">
                <div>this is a container</div>
                <div onClick={this.toLogout}>To logout</div>
            </div>
        )
    }
}