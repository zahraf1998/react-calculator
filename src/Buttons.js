import React from "react";
import "./Buttons.css";

function Buttons() {
  const buttons = [
    { value: "AC", class: "" },
    { value: "+/-", class: "" },
    { value: "%", class: "" },
    { value: "/", class: "op" },
    { value: "7", class: "num" },
    { value: "8", class: "num" },
    { value: "9", class: "num" },
    { value: "*", class: "op" },
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
    <div className="Buttons row">
      {buttons.map((button, i) => {
        return (
          <div
            key={i}
            className={`${
              button.value === "0" ? "col-6" : "col-3"
            } text-center p-2 button-container`}
          >
            <button
              className={`btn border p-2 rounded-circle h-100 w-100 ${
                button.value === "0" ? "w-100" : ""
              }`}
            >
              {button.value}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Buttons;
