import { ClassState } from "./components/ClassState/ClassState";
import { UseState } from "./components/UseState/UseState";
import "./App.css";


function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
