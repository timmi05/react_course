import React from 'react';
import SearchPanel from './search/SearchPanel';
import ProductContainer from './product/ProductContainer';
import AppLabel from './component/AppLabel';
import './header_container.css';

const HeaderContainer = (props) => {

    const { productSelected } = props;
    const Content = productSelected ? ProductContainer : SearchPanel;
    const SearchRef = productSelected
        ? () => <ref  className="header-container-search-ref">search</ref>
        : () => <a/>;

    return (
        <div className="header-container">
            <div className="header-container-label">
                    < AppLabel />
            </div>
            <SearchRef/>
            < Content
                runtime = '145'
                release_date = '2019'
                description = 'Best film of year'
                title = 'GUARDIANS OF THE GALAXY VOL. 3'
                tagline = 'tagline'
                vote_average = '4'
                poster_path = 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg'
                overview = "The third film based on Marvel's Guardians of the Galaxy"
             />
         </div>
    );
}

export default HeaderContainer