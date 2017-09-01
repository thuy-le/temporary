import React, { Component, PropTypes } from 'react';

export default class AsyncComponent extends Component {

    static propTypes = {
        loader: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            Component: null,
        };
    }

    componentDidMount() {
        this.props.loader().then((Component) => {
            if (Component.default) {
                Component = Component.default
            }
            this.setState({ Component });
        });
    }

    render() {
        const { Component } = this.state;
        if (Component) {
            return <Component {...this.props} />;
        }

        return <div/>; // loading wheel
    }
}