import "./App.css";
import Wrapper from "./Component/Wrapper";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "+", "-", ".", "*"];
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())}>{i}</button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const del = () => {
    if (calc === "") {
      return;
    } else {
      const value = calc.slice(0, -1);
      setCalc(value);
    }
  };
  return (
    <Wrapper>
      <div className="screen">{calc || "0"}</div>
      <div className="nums">
        <div className="signs">
          <button className="button" onClick={() => updateCalc("/")}>
            /
          </button>
          <button className="button" onClick={() => updateCalc("+")}>
            +
          </button>
          <button className="button" onClick={() => updateCalc("-")}>
            -
          </button>
          <button className="button" onClick={() => updateCalc("*")}>
            *
          </button>
          <button className="button" onClick={del}>
            C
          </button>
        </div>
        <div className="but">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </Wrapper>
  );
}
export default App;
