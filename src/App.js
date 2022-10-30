import React from "react";
import "./style.css";
import {useState} from 'react'

export default function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ['+', '*', '/', '-'];

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    } 
  }
  return (
    <div className= "App">
  <div className= "calculator">
    <div className= "display"> {calc || "0"}
      </div>
      <div className= "operators">
      <button onClick={() => updateCalc('+')}>+</button>
      <button onClick={() => updateCalc('*')}>*</button>
      <button onClick={() => updateCalc('/')}>/</button>
      <button onClick={() => updateCalc('-')}>-</button>
      <button>DEL</button>

        </div>
        <div className= "digits">
        <button onClick={() => updateCalc('9')}>9</button>
        <button onClick={() => updateCalc('8')}>8</button>
        <button onClick={() => updateCalc('7')}>7</button>
        <button onClick={() => updateCalc('6')}>6</button>
        <button onClick={() => updateCalc('5')}>5</button>
        <button onClick={() => updateCalc('4')}>4</button>
        <button onClick={() => updateCalc('3')}>3</button>
        <button onClick={() => updateCalc('2')}>2</button>
        <button onClick={() => updateCalc('1')}>1</button>
        <button onClick={() => updateCalc('0')}>0</button>
        <button onClick={() => updateCalc('.')}>.</button>
          <button>=</button>
          </div>
    </div>
    </div>
  );
}
