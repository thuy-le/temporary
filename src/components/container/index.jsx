import React, {Component} from 'react';

require('./style.less');
export default class Container extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container _block">
                <p>this is a container</p>
            </div>
        )
    }
}