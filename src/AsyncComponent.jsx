import React, { Component, PropTypes } from 'react';

// Usage:
// 
// function loader() {
//   return new Promise((resolve) => {
//     if (process.env.LAZY_LOAD) {
//       require.ensure([], (require) => {
//         resolve(require('./SomeComponent').default);
//       });
//     }
//   });
// }
// ...
// <AsyncComponent loader={loader} />
//
// In the future, loader() could be:
// const loader = () => import('./SomeComponent');
export default class AsyncComponent extends Component {
    static propTypes = {
        loader: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            Component: null,
        };
    }
    
    componentDidMount() {
        this.props.loader().then((Component) => {
            this.setState({ Component });
        });
    }

    render() {
        const { Component } = this.state;
        if (Component) {
            return <Component {...this.props} />;
        }

        return null; // loading wheel
    }
}