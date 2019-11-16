import React from 'react';
import ResultItem from './ResultItem';
import './result_body.css'

const ResultBody = (props) =>
    <div className="result-body">
        <ResultItem
            poster_path = 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg'
            title = 'Solo: A Star Wars Story'
            tagline = 'A Star Wars'
            release_date = '2018'
        />
    </div>

export default ResultBody
