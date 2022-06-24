import React from 'react'
import './NumberArea.css';
import Button from './UI/Button';

const NumberArea = props => {

    const numbs = [7,8,9,4,5,6,1,2,3,'.',0,'='];
    const clickHandler = (value) => {
        
        props.onAddValue(value);
    }

    // const calc = () => {
    //     return n1 
    // }
    
    return(
        <div className='numbers'>
            {numbs.map( (el) => (
            <Button id={Math.floor(Math.random() * 100) + 1} onClickEvent={clickHandler}>{el}</Button>
            ))}


            {/* <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button> */}
        </div>
    );
}

export default NumberArea;