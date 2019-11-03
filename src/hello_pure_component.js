// import React from "react"

class HelloPure extends React.PureComponent {
    render() {
        return <div>{`Hello, ${this.props.toWhat}`}</div>;
    }
}

ReactDOM.render(
    <HelloPure toWhat="PureComponent world"/>,
    document.getElementById('component_way3')
);