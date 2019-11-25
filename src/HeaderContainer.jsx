import React from 'react';
import { SearchPanel } from './search/SearchPanel';
import {Product } from './product/Product';
import { AppLabel } from './component/AppLabel';
import { SearchLink } from './component/SearchLink';
import './HeaderContainer.css';

export const HeaderContainer = props => {
    const { productSelected } = props;
    const Content = productSelected ? Product : SearchPanel;

    return (
        <div className='header-container'>
            <div className='header-container-label'>
                <span>
                < AppLabel />
                </span>
                <span className='header-container-search'>
                    < SearchLink
                    productSelected = { productSelected }
                    />
                </span>
            </div>
            < Content
                runtime = '145'
                releaseDate = '2019'
                description = 'Best film of year'
                title = 'Guardians of the galaxy: VOL. 3'
                tagline = 'Tagline'
                voteAverage = '4'
                posterPath = 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg'
                overview = "The third film based on Marvel's Guardians of the Galaxy.
                 The third film based on Marvel's Guardians of the Galaxy. The third film based on Marvel's Guardians of
                  the Galaxy. The third film based on Marvel's Guardians of the Galaxy. The third film based on Marvel's
                   Guardians of the Galaxy"
             />
         </div>
    );
};
