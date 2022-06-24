import React from 'react';
// import moduleName from ''
import './ResultArea.css';

const ResultArea = props => {

    const changeHandler = (e) => {
        // console.log(e.target.value)
        // if(e.target.value[9] === '0123456789') {
        // }
        props.onChangeEvent(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.obSubmitEvent();
    }

    return (
        // <div className={`${props.style} calculated-area`} >{value}</div>
        <form action="/" onSubmit={submitHandler} className={`${props.style} calculated-area`}>
            <input onChange={changeHandler} type="text" value={props.calcValue} />
        </form>
    )
};

export default ResultArea;