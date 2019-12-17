import React, {Component} from 'react';
import {SearchBySwitch} from './SearchBySwitch';
import {Button} from '../component/Button'
import './SearchPanel.css';
import {connect} from 'react-redux';
import {selectSearchBy} from '../store/selectors/selectSearchBy'
import {search} from '../store/actions/search'

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {searchBy: props.searchBy};
    }

    handleSearchSubmit = () => {
        this.props.onSearch(this.searchInput.value, this.state.searchBy);
    };

    searchByTitle = () => {
        this.state.searchBy = 'title'
    };

    searchByGenre = () => {
        this.state.searchBy = 'genre'
    };

    render() {
        return (
            <div className='search-panel'>
                <div className='search-panel-label'>FINED YOUR MOVIE</div>
                <div className='search-panel-main'>
                    <input className='search-panel-input' type='text' ref={(input => this.searchInput = input)}/>
                    <Button
                        label='SEARCH'
                        classes='search-panel-button'
                        onClick={this.handleSearchSubmit}
                    />
                </div>
                <SearchBySwitch
                    searchByTitle={this.searchByTitle}
                    searchByGenre={this.searchByGenre}
                    searchByTitleDisabled={this.state.searchBy === 'title'}
                />
            </div>
        );
    };
}

const mapStateToProps = state => ({
    searchBy: selectSearchBy(state)
});

const mapDispatchToProps = dispatch => ({
    onSearch: (value, searchBy) => dispatch(search(value, searchBy))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPanel);
