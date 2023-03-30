import { useState } from "react";

import BtnEqual from "./assets/ButtonEquals.png";
import PlusMinus from "./assets/PlusMinus.png";
import Plus from "./assets/Plus.png";
import Minus from "./assets/Minus.png";
import X from "./assets/X.png";
import Divide from "./assets/Divide.png";
import Percent from "./assets/Percent.png";
import Equals from "./assets/Equals.png";

import * as C from "./styles";

function App() {
  const [number, setNumber] = useState("0");
  const [result, setResult] = useState("0");

  const handleNumber = (num: any) => {
    if (number.includes(",") && num === ",") return;
    if (number === "0") {
      setNumber(num);
    } else {
      setNumber(`${number}${num}`);
    }
  };

  const handleOperations = (operation: string) => {
    if (number.slice(-1) !== ".") {
      setNumber(`${number}${operation}`);
    }
  };

  const handleResult = () => {
    setResult(eval(number).toString());
  };

  const handleClear = () => {
    setNumber("0");
    setResult("0");
  };

  const handleDeleteNumber = () => {
    setNumber(number.substring(0, number.length - 1));
  };

  const handlePercent = () => {
    const numberPercent = parseFloat(number);
    setResult((numberPercent / 100).toString());
    setNumber("0");
  };

  const handleChangeSign = () => {
    const num = parseFloat(number);

    if (number > "0") {
      const numberNegative = num * -1;
      setNumber(numberNegative.toString());
    } else {
      const numberPositive = Math.abs(num);
      setNumber(numberPositive.toString());
    }
  };

  return (
    <C.Container>
      <C.Calculate>
        <C.Result>
          <span>{number}</span>
          <div className="calculate_result">
            <span>
              <img src={Equals} alt="" />
            </span>
            <span className="result">{result}</span>
          </div>
        </C.Result>
        <C.Buttons>
          <button className="clean" onClick={handleClear}>
            CE
          </button>
          <button onClick={handleDeleteNumber}>C</button>
          <button onClick={handlePercent}>
            <img src={Percent} alt="" />
          </button>

          <button
            className="button_operations"
            onClick={() => handleOperations("/")}
          >
            <img src={Divide} alt="" />
          </button>
          <button onClick={() => handleNumber("7")}>7</button>
          <button onClick={() => handleNumber("8")}>8</button>
          <button onClick={() => handleNumber("9")}>9</button>

          <button
            className="button_operations"
            onClick={() => handleOperations("*")}
          >
            <img src={X} alt="" />
          </button>
          <button onClick={() => handleNumber("4")}>4</button>
          <button onClick={() => handleNumber("5")}>5</button>
          <button onClick={() => handleNumber("6")}>6</button>

          <button
            className="button_operations"
            onClick={() => handleOperations("-")}
          >
            <img src={Minus} alt="" />
          </button>
          <button onClick={() => handleNumber("1")}>1</button>
          <button onClick={() => handleNumber("2")}>2</button>
          <button onClick={() => handleNumber("3")}>3</button>

          <button
            className="button_operations"
            onClick={() => handleOperations("+")}
          >
            <img src={Plus} alt="" />
          </button>
          <button onClick={handleChangeSign}>
            <img src={PlusMinus} alt="" />
          </button>
          <button onClick={() => handleNumber("0")}>0</button>
          <button onClick={() => handleNumber(".")}>,</button>
          <button className="button_equals" onClick={handleResult}>
            <img src={BtnEqual} alt="" />
          </button>
        </C.Buttons>
      </C.Calculate>
    </C.Container>
  );
}

export default App;
