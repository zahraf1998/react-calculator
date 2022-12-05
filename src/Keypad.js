import React from "react";
import "./Keypad.css";

function Keypad() {
  const keys = [
    { value: "AC", class: "" },
    { value: "+/-", class: "" },
    { value: "%", class: "" },
    { value: "÷", class: "op" },
    { value: "7", class: "num" },
    { value: "8", class: "num" },
    { value: "9", class: "num" },
    { value: "x", class: "op" },
    { value: "4", class: "num" },
    { value: "5", class: "num" },
    { value: "6", class: "num" },
    { value: "-", class: "op" },
    { value: "1", class: "num" },
    { value: "2", class: "num" },
    { value: "3", class: "num" },
    { value: "+", class: "op" },
    { value: "0", class: "num" },
    { value: ".", class: "num" },
    { value: "=", class: "op" },
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
