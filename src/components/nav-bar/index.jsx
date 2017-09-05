import React, {Component} from 'react';

require('./style.less');
export default class NavBar extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container _nav-container">
                <a href="#">
                    <div className="container _nav-icon"/>
                </a>
            </div>
        )
    }
}