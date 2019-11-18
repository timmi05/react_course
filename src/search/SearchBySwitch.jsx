import React, { Component } from 'react';
import Button from '../component/Button'
import './search_by_switch.css';

export default class SearchBYSwitch extends Component {
   constructor(props) {
     super(props);
     this.state = { disabled: false };
   }

    handleSubmit1 = event => {
      this.setState({disabled: true});
    };

    handleSubmit2 = event => {
      this.setState({disabled: false});
    };

    render() {
      return (
        <div className='search-by-switch'>
            <span className='search-by-switch-label'>SEARCH BY </span>
            <div className = 'search-by-switch-buttons'>
                <Button
                label = 'TITLE'
                classes = 'search-by-switch-button search-by-switch-left-button'
                handleSubmit = {this.handleSubmit1}
                disabled = {this.state.disabled}
                />
                <Button
                label = 'GENRE'
                classes = 'search-by-switch-button search-by-switch-right-button'
                handleSubmit = {this.handleSubmit2}
                disabled = {!this.state.disabled}
                />
            </div>
        </div>
      );
    }
}