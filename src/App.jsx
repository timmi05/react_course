import React from 'react';
import AppContainer from './AppContainer';
import ErrorBoundary from  './error/ErrorBoundary'
import './app.css';

const App = () => {
    const productSelected = false;
    const genre = productSelected ? 'Drama' : null;

    const data =
        // [];
        [{
        id: 1,
        poster_path: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
        title: 'Solo: A Star Wars Story',
        tagline: 'A Star Wars',
        release_date : '2018'
    }, {
        id:2,
        poster_path: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
        title: 'Solo: A Star Wars Story',
        tagline: 'A Star Wars',
        release_date: '2018'
    }, {
        id: 3,
        poster_path: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
        title: 'Solo: A Star Wars Story',
        tagline: 'A Star Wars',
        release_date: '2018'
    }, {
        id: 4,
        poster_path: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
        title: 'Solo: A Star Wars Story',
        tagline: 'A Star Wars',
        release_date: '2018'
    }, {
        id: 5,
        poster_path: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
        title: 'Solo: A Star Wars Story',
        tagline: 'A Star Wars',
        release_date: '2018'
    }, {
        id: 6,
        poster_path: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
        title: 'Solo: A Star Wars Story',
        tagline: 'A Star Wars',
        release_date: '2018'
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

export default App