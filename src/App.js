import { useState } from "react";
import "./App.css";
import Keypad from "./Keypad";
function App() {
  const [value, setValue] = useState("0");
  return (
    <div className="App d-flex justify-content-center">
      <div className="App-container p-4">
        <input
          type="text"
          inputMode="numeric"
          value={value}
          className="App-input w-100"
          autoFocus
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <Keypad value={value} setValue={setValue} />
      </div>
    </div>
  );
}

export default App;
