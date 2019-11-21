import React from 'react';
import classnames from 'classnames';
import './EmptyBody.css'

export const EmptyBody = props => {
    const composedClassName = classnames(
        props.classesName,
        'empty-body'
      );
    return(
    <div className={ composedClassName }>No films found</div>
    )
};
