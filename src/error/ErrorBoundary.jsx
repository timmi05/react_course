import React, { Component } from 'react';
import AppContainer from '../AppContainer'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // componentDidCatch(error, errorInfo) {
    //     this.setState({
    //         error: error,
    //         errorInfo: errorInfo
    //     });
    //     // logErrorToMyService(error, errorInfo);
    // }


    render() {
        if (this.state.hasError) {
            return <AppContainer
                productSelected = { false }
                genre={ null }
                data = { [] }
            />;
        }
        return this.props.children;
    }
}