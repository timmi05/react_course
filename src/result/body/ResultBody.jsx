import React from 'react';
import ResultItem from './ResultItem';
import ResultList from './ResultList';
import EmptyBody from './EmptyBody';
import './result_body.css'

const ResultBody = props => {
    const { data } = props;

   if (data.length > 0)
    return (
        <ResultList
         data = { data }
         classesName = 'result-body'
        />
    );
    return (
            < EmptyBody
             classesName = 'result-body'
            />
        )
};

export default ResultBody
