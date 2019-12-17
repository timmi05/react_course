import React from 'react';
import {Button} from '../../component/Button'
import './ResultSort.css'
import {connect} from 'react-redux'
import {selectIsProductSelected} from '../../store/selectors/selectIsProductSelected'
import {selectSortBy} from '../../store/selectors/selectSortBy'
import {openMovie} from '../../store/actions/sort'

const ResultSort = props => {
    const {onSortBy, sortBy, isProductSelected} = props;
    if (isProductSelected)
        return (
            <a/>
        );

    return (
        <span className='result-sort'>
        <label className='result-sort-label'>SORT BY </label>
            <div className='result-sort-buttons'>
                <Button
                    label='RELEASE DATE'
                    classes='result-sort-button result-sort-left-button'
                    onClick={() => onSortBy('release_date')}
                    disabled={sortBy === 'release_date'}
                />
                <Button
                    label='RATING'
                    classes='result-sort-button result-sort-right-button'
                    onClick={() => onSortBy('vote_average')}
                    disabled={sortBy === 'vote_average'}
                />
            </div>
        </span>
    );
};

const mapStateToProps = state => ({
    sortBy: selectSortBy(state),
    isProductSelected: selectIsProductSelected(state)
});

const mapDispatchToProps = dispatch => ({
    onSortBy: sortBy => dispatch(openMovie(sortBy))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultSort);
