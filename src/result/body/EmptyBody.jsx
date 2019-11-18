import React from 'react';
import classnames from 'classnames';
import './empty_body.css'

const EmptyBody = props => {
    const composedClassName = classnames(
        props.classesName,
        'empty-body'
      );
    return(
    <div className={ composedClassName }>No films found</div>
    )
};
export default EmptyBody
