class Hello extends React.Component {
    render() {
        return (
            <span>{`Hello,  ${this.props.toWhat}`}</span>
        );
    }
}

ReactDOM.render(
    <Hello toWhat="Component world"/>,
    document.getElementById('component_way2')
);