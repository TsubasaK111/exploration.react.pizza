import './App.css';

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

  const pizzaSliceStyle = coloring === "" ? null : { color: 'transparent', 'textShadow': `0 0 0 ${coloring}`};

  return (
    <div className="App">
      <header className="App-header">
        <div className="pizza">
            <div className="pizza__slice" style={pizzaSliceStyle}>
              🍕
            </div>
            <h1 className="pizza__topping">
              {topping}
            </h1>
        </div>
        <form className="pizza__label">
          <label>Choose your topping:</label>
          <input
              onChange={e => {
                  updateTopping(e.target.value);
              }}
              type="text"
          ></input>
          <label>Food coloring?:</label>
          <input
              onChange={e => {
                  updateColoring(e.target.value);
              }}
              type="text"
          ></input>
        </form>
      </header>
    </div>
  );
}

export default App;
