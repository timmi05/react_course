import React from 'react';
import './Button.css';
import classnames from 'classnames';

export const Button = props => {

    const { label, classes, handleSubmit, disabled } = props;
    const composedClassName = classnames(
        'button',
        classes,
      );

    return (
    <button className={ composedClassName } onClick={ handleSubmit } type="submit"
     disabled={ disabled }>{ label }</button>
    );
};
