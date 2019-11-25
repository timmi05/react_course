import React from 'react';
import { ResultList } from './ResultList';
import { EmptyBody } from './EmptyBody';
import './ResultBody.css'

export const ResultBody = props => {
    const { data } = props;

   if (data.length === 0)
       return (
           < EmptyBody
               classesName = 'result-body'
           />
       );
       return (
        <ResultList
         data = { data }
         classesName = 'result-body'
       />
    );
};
