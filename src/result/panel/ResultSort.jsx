import React, { Component } from 'react';
import Button from '../../component/Button'

export default class ResultSort extends Component {
constructor(props) {
     super(props);
     this.state = {value: '', disabled: false};
   }

    handleSubmit1 = (event) => {
      this.setState({disabled: true});
    }

    handleSubmit2 = (event) => {
      this.setState({disabled: false});
    }

    render() {
      return (
        <span className='result-sort'>
        <label>Sort by </label>
            <Button
            label = 'RELEASE DATE'
            classes = 'result-sort-left-button'
            handleSubmit = {this.handleSubmit1}
            disabled = {this.state.disabled}
            />
            <Button
            label = 'RATING'
            classes = 'result-sort-right-button'
            handleSubmit = {this.handleSubmit2}
            disabled = {!this.state.disabled}
            />
        </span>
      );
    }
}