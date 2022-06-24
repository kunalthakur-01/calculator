import React from 'react'

import './Button.css';

const Button = props => {

    const clickEventHandler = (e) => {
        props.onClickEvent(e.target.innerText)
    }

    return (
        <button key={props.id} onClick={clickEventHandler} className={ `${props.style}` }>{props.children}</button>
    );
};

export default Button;