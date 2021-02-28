import './App.css';
import Pizza from './components/Pizza';
// import PizzaLabel from './components/PizzaLabel';

import { useState } from 'react';

const App = () => {
  const [topping, setTopping] = useState("cheese");
  const [coloring, setColoring] = useState("");

  const updateTopping = (topping) => {
    console.log(`topping: ${topping}`);
    setTopping(topping);
  }
  const updateColoring = (coloring) => {
    console.log(`coloring: ${coloring}`);
    setColoring(coloring);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Pizza topping={topping} coloring={coloring}/>
        <PizzaLabel updateColoring={updateColoring} updateTopping={updateTopping}/>
      </header>
    </div>
  );
}

const PizzaLabel = (props) => {
  return (
      <form className="pizza__label">
          <label>Choose your topping:</label>
          <input
              onChange={e => {
                  props.updateTopping(e.target.value);
              }}
              type="text"
          ></input>
          <label>Food coloring?:</label>
          <input
              onChange={e => {
                  props.updateColoring(e.target.value);
              }}
              type="text"
          ></input>
      </form>
  );
}


export default App;
