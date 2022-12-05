import "./Keypad.css";

let result = 0;
let operator = null;
let operationDone = false;

function Keypad({ value, setValue }) {
  const calculate = () => {
    if (operator === "+") {
      result += parseFloat(value);
    } else if (operator === "-") {
      result -= parseFloat(value);
    } else if (operator === "x") {
      result *= parseFloat(value);
    } else {
      result /= parseFloat(value);
    }
    result = parseFloat(result.toPrecision(10)).toString();
  };

  const changeValue = (e) => {
    const digit = e.target.innerHTML;
    setValue(
      (value === "0" && digit !== ".") || operationDone
        ? e.target.innerHTML
        : value + digit
    );
    operationDone = false;
  };

  const toggleSign = () => {
    setValue((0 - parseFloat(value)).toString());
  };

  const clear = (e) => {
    if (e.target.innerHTML === "C" && operator) {
      const newValue = value.slice(0, value.length - 1);
      setValue(newValue === "" ? "0" : newValue);
    } else {
      setValue("0");
      operator = null;
      result = 0;
    }
  };

  const percent = () => {
    setValue(value / 100);
  };

  const doOperation = (e) => {
    if (operator && !operationDone) {
      calculate();
    } else {
      result = parseFloat(value);
    }
    operator = e.target.innerHTML;
    operationDone = true;
  };

  const showResult = () => {
    if (operator) calculate();
    setValue(result);
    operator = null;
  };

  const keys = [
    { value: value === "0" ? "AC" : "C", class: "", handleClick: clear },
    { value: "+/-", class: "", handleClick: toggleSign },
    { value: "%", class: "", handleClick: percent },
    { value: "÷", class: "op", handleClick: doOperation },
    { value: "7", class: "num", handleClick: changeValue },
    { value: "8", class: "num", handleClick: changeValue },
    { value: "9", class: "num", handleClick: changeValue },
    { value: "x", class: "op", handleClick: doOperation },
    { value: "4", class: "num", handleClick: changeValue },
    { value: "5", class: "num", handleClick: changeValue },
    { value: "6", class: "num", handleClick: changeValue },
    { value: "-", class: "op", handleClick: doOperation },
    { value: "1", class: "num", handleClick: changeValue },
    { value: "2", class: "num", handleClick: changeValue },
    { value: "3", class: "num", handleClick: changeValue },
    { value: "+", class: "op", handleClick: doOperation },
    { value: "0", class: "num", handleClick: changeValue },
    { value: ".", class: "num", handleClick: changeValue },
    { value: "=", class: "op", handleClick: showResult },
  ];

  return (
    <div className="Keypad row">
      {keys.map((key, i) => {
        return (
          <div
            key={i}
            className={`${key.value === "0" ? "col-6" : "col-3"}
             text-center p-2 Keypad-btn-container`}
          >
            <button
              className={`h-100 w-100 
              ${key.value === "0" ? "Keypad-zero" : "rounded-circle"} 
              ${key.class}`}
              onClick={key.handleClick}
            >
              {key.value}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Keypad;
