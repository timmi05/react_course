import * as React from "react";
import {HelloFunction} from "./hello_function_element.js";
import {HelloPure} from "./hello_pure_component.js";

export class Hello extends React.Component {
    render() {
        return (
            React.createElement('div', null,
             <span>{`Hello, component ${this.props.toWhat}`}</span>,
             <br/>,
             <HelloPure toWhat={this.props.toWhat}/>,
             <br/>,
             <HelloFunction toWhat={this.props.toWhat}/>
            )
        );
    }
}
