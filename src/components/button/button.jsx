import React from "react";
import './button.scss'
import classNames from 'classnames';


function Button({ type, onHandleClick, children}) {

    const buttonClasses = classNames('button', {
        'button--purple': type === 'PURPLE',
        'button--blue': type === 'BLUE',
        'button--grey': type === 'GREY',
        'button--red': type === 'RED',
        'button--transparent': type === 'TRANSPARENT',
        'button--underline': type === 'UNDERLINE',
      });

    return (
        <button className={buttonClasses} onClick={onHandleClick}>
            {children}
        </button>
    )
}

export default Button;