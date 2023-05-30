import React, { useState } from "react";
import Button from "./Button";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setResult(result + value);
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };

  return (
    <div className="calculator">
      <input className="input" type="text" value={result} disabled />
      <div className="buttons">
        <Button onClick={handleClick}>1</Button>
        <Button onClick={handleClick}>2</Button>
        <Button onClick={handleClick}>3</Button>
        <Button onClick={handleClick}>+</Button>
        <Button onClick={handleClick}>4</Button>
        <Button onClick={handleClick}>5</Button>
        <Button onClick={handleClick}>6</Button>
        <Button onClick={handleClick}>-</Button>
        <Button onClick={handleClick}>7</Button>
        <Button onClick={handleClick}>8</Button>
        <Button onClick={handleClick}>9</Button>
        <Button onClick={handleClick}>*</Button>
        <Button onClick={handleClick}>0</Button>
        <Button onClick={calculate}>=</Button>
        <Button onClick={clear}>C</Button>
        <Button onClick={handleClick}>/</Button>
      </div>
    </div>
  );
}

export default Calculator;
