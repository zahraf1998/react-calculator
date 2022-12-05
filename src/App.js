import { useState } from "react";
import Keypad from "./Keypad";
import "./App.css";

function App() {
  const [value, setValue] = useState("0");

  return (
    <div className="App d-flex justify-content-center">
      <div className="App-container p-4">
        <div className="App-display w-100">{value}</div>
        <Keypad value={value} setValue={setValue} />
      </div>
    </div>
  );
}

export default App;
