import "./App.css";
import Buttons from "./Buttons";
function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div className="App-container rounded border p-4">
        <input type="text" className="form-control"></input>
        <Buttons />
      </div>
    </div>
  );
}

export default App;
