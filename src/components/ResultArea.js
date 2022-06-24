import React from 'react';
// import moduleName from ''
import './ResultArea.css';

const ResultArea = props => {
    const arr = ['0','1','2','3','4','5','6','7','8','9','.','+','*','-','/','',null];
    const changeHandler = (e) => {
        
        if (arr.includes(e.nativeEvent.data)) {
            props.onChangeEvent(e.target.value);
        }
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