import React from 'react';
import { AppContainer } from './AppContainer';
import { ErrorBoundary } from  './error/ErrorBoundary'
import './App.css';

export const App = () => {
    const productSelected = true;
    const genre = productSelected ? 'Drama' : null;

    const data =
        // [];
        [{
        id: 1,
        posterPath: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
        title: 'Solo: A Star Wars Story',
        tagline: 'A Star Wars',
        releaseDate : '2018'
    }, {
        id:2,
        posterPath: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
        title: 'Solo: A Star Wars Story',
        tagline: 'A Star Wars',
        releaseDate: '2018'
    }, {
        id: 3,
        posterPath: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
        title: 'Solo: A Star Wars Story',
        tagline: 'A Star Wars',
        releaseDate: '2018'
    }, {
        id: 4,
        posterPath: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
        title: 'Solo: A Star Wars Story',
        tagline: 'A Star Wars',
        releaseDate: '2018'
    }, {
        id: 5,
        posterPath: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
        title: 'Solo: A Star Wars Story',
        tagline: 'A Star Wars',
        releaseDate: '2018'
    }, {
        id: 6,
        posterPath: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
        title: 'Solo: A Star Wars Story',
        tagline: 'A Star Wars',
        releaseDate: '2018'
    }];

    return(
        <div className="app">
            <ErrorBoundary>
                <AppContainer
                productSelected = { productSelected }
                genre = { genre }
                data = { data }
                />
            </ErrorBoundary>
        </div>
    )
};
