import React, { useState } from 'react'

import styles from './App.module.css';
import ResultArea from './components/ResultArea';
import NumberArea from './components/NumberArea';
import OperationButton from './components/OperationButton';
import Button from './components/UI/Button';

function App() {

  const [calculatioValue, setcalculatioValue] = useState('');

  const addValueHandler = (val) => {
    if (val === '=') {
      try {
        // eslint-disable-next-line
        setcalculatioValue(eval(calculatioValue));
      }
      catch {
        console.log('Invalid Expression!!');
      }
      return;
    }

    setcalculatioValue(preValue => {
      return preValue + val;
    })
  }

  const changeHandler = (val) => {
    setcalculatioValue(val)
  }

  const clearResult = (clr) => {
    setcalculatioValue('');
  }

  const submitHandler = () => {
    try {
      // eslint-disable-next-line
      setcalculatioValue(eval(calculatioValue));
    }
    catch {
      console.log('Invalid Expression!!');
    }
  }


  return (
    <div className={styles.app}>
      <ResultArea obSubmitEvent={submitHandler} onChangeEvent={changeHandler} style={styles.headerFooter} calcValue={calculatioValue} />
      <NumberArea onAddValue={addValueHandler} />
      <OperationButton onAddValue={addValueHandler} />
      <Button onClickEvent={clearResult} style={styles.headerFooter}>Clear</Button>
    </div>
  );
}

export default App;
