import React from 'react';
import './Button.css';
import classnames from 'classnames';

export const Button = props => {
    const {label, classes, onClick, disabled} = props;
    const composedClassName = classnames(
        'button',
        classes,
    );

    return (
        <button className={composedClassName} onClick={onClick} type="submit"
                disabled={disabled}>{label}</button>
    );
};
