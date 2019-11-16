import React, { Component } from 'react';
import SearchBySwitch from './SearchBySwitch';
import Button from '../component/Button'
import './search_panel.css';

export default class SearchPanel extends Component {
   constructor(props) {
     super(props);
   }

    state = {value: '', disabled: false};

    handleChange = (event) => {
      this.setState({value: event.target.value});
    }

    handleSubmit1 = (event) => {
      this.setState({disabled: true});
    }

    render() {
      return (
       <span className='search-panel'>
           <div>
               <input type="text" value={ this.state.value } onChange={ this.handleChange } />
               <Button
               label = 'SEARCH'
               classes = 'search-panel-button'
               handleSubmit = { this.handleSubmit }
               disabled = { this.state.disabled }
               />
           </div>
           <SearchBySwitch/>
       </span>
      );
    }
}