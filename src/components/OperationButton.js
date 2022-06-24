import React from 'react';
import './OperationButton.css';
import Button from './UI/Button';


const OperationButton = props => {

    const clickHandler = (value) => {
        props.onAddValue(value);
    }

    return (
        <div className='operations'>
            <Button onClickEvent={clickHandler}>/</Button>
            <Button onClickEvent={clickHandler}>*</Button>
            <Button onClickEvent={clickHandler}>+</Button>
            <Button onClickEvent={clickHandler}>-</Button>
        </div>
    )
};

export default OperationButton;