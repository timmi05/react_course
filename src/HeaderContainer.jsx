import React from 'react';
import SearchPanel from './search/SearchPanel';
import {Product} from './product/Product';
import {AppLabel} from './component/AppLabel';
import {SearchLink} from './component/SearchLink';
import './HeaderContainer.css';
import {connect} from 'react-redux';
import {selectIsProductSelected} from './store/selectors/selectIsProductSelected'
import {selectSelectedProduct} from './store/selectors/selectSelectedProduct'
import {moveToSearch} from './store/actions/search'

const HeaderContainer = props => {
    const {isProductSelected, selectedProduct, onMoveToSearch} = props;
    const Content = isProductSelected ? Product : SearchPanel;
    return (
        <div className='header-container'>
            <div className='header-container-label'>
                <span>
                < AppLabel/>
                </span>
                <span className='header-container-search'>
                    < SearchLink
                        isProductSelected={isProductSelected}
                        moveToSearch={onMoveToSearch}
                    />
                </span>
            </div>
            < Content
                movie={selectedProduct}
            />
        </div>
    );
};


const mapStateToProps = state => ({
    isProductSelected: selectIsProductSelected(state),
    selectedProduct: selectSelectedProduct(state)
});

const mapDispatchToProps = dispatch => ({
    onMoveToSearch: () => dispatch(moveToSearch())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);

