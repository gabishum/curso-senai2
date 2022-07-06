import './App.css';
import {useState} from "react";

function App() {
  const [contador, setContador] = useState(0);
  return (
     <div className = "App">
     <button onClick = {() => setContador((prevContagem) => prevContagem -1)}>-</button>
     <h1>{contador}</h1>
     <button onClick = {() => setContador((prevContagem) => prevContagem +1)}>+</button>
    </div>
  );
}
export default App;


