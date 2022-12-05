import "./App.css";
import Buttons from "./Buttons";
function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div className="App-container p-4">
        <input
          type="text"
          dir="rtl"
          className="App-input w-100"
          autoFocus
        ></input>
        <Buttons />
      </div>
    </div>
  );
}

export default App;
