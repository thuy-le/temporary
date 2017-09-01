import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
    return {

    }
}

function dispatchToPropsBinding(dispatch, ownProps) {
    return {
        init: () => dispatch({type: 'START_CONTAINER'})
    }
}

require('./style.less');
@connect(mapStateToProps, dispatchToPropsBinding)
export default class Container extends Component {
    static PropTypes = {};
    static DefaultTypes = {};

    constructor(props) {
        super(props);
        this.state = {};
        this.toLogout = this.toLogout.bind(this);
    }

    toLogout() {

    }

    componentDidMount() {
        this.props.init();
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