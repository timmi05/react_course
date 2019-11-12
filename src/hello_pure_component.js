import * as React from 'react';

export class HelloPure extends React.PureComponent {
    render() {
        return <span>{`Hello, pureComponent ${this.props.toWhat}`}</span>;
    }
}
