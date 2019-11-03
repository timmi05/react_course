// import React from "react"

const qwerty = ({toWhat}) => <span>{`Hello, ${toWhat}`}</span>;

ReactDOM.render(
    qwerty({toWhat: 'Function world'}),
    document.getElementById('component_way4')
);