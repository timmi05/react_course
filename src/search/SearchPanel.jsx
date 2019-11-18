import React, { Component } from 'react';
import SearchBySwitch from './SearchBySwitch';
import Button from '../component/Button'
import './search_panel.css';

export default class SearchPanel extends Component {
   constructor(props) {
     super(props);
   }

    state = {value: '', disabled: false};

    handleChange = event => {
      this.setState({value: event.target.value});
    };

    handleSubmit = () => {
      this.setState({disabled: true});
    };

    render() {
      return (
       <div className='search-panel'>
           <div className='search-panel-label'>FINED YOUR MOVIE</div>
           <div className='search-panel-main'>
               <input className='search-panel-input' type='text' value={ this.state.value } onChange={ this.handleChange } />
               <Button
               label = 'SEARCH'
               classes = 'search-panel-button'
               handleSubmit = { this.handleSubmit }
               disabled = { this.state.disabled }
               />
           </div>
           <SearchBySwitch/>
       </div>
      );
    }
}