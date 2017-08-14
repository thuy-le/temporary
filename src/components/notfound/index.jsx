import React, { Component } from 'react';
import { browserHistory } from 'react-router';

require('./style.less');
export default class NotFound extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container _block">
                <div>404</div>
            </div>
        )
    }
}