import React from 'react';
import './button.css';
import classnames from 'classnames';

const Button = props => {

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
export default Button
