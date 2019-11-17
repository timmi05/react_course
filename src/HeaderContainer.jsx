import React from 'react';
import SearchPanel from './search/SearchPanel';
import ProductContainer from './product/ProductContainer';
import AppLabel from './component/AppLabel';
import './header_container.css';

const HeaderContainer = (props) => {
    const { productSelected } = props;
    const Content = productSelected ? ProductContainer : SearchPanel;
    const SearchRef = productSelected
        ? () => <a  className='header-container-search-ref' href=''>search</a>
        : () => <a/>;

    return (
        <div className='header-container'>
            <div className='header-container-label'>
                <span>
                < AppLabel />
                </span>
                <span className='header-container-search'>
                    <SearchRef/>
                </span>
            </div>
            < Content
                runtime = '145'
                release_date = '2019'
                description = 'Best film of year'
                title = 'Guardians of the galaxy: VOL. 3'
                tagline = 'Tagline'
                vote_average = '4'
                poster_path = 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg'
                overview = "The third film based on Marvel's Guardians of the Galaxy.
                 The third film based on Marvel's Guardians of the Galaxy. The third film based on Marvel's Guardians of
                  the Galaxy. The third film based on Marvel's Guardians of the Galaxy. The third film based on Marvel's
                   Guardians of the Galaxy"
             />
         </div>
    );
};

export default HeaderContainer