import './App.css';

import { useState, useEffect } from 'react';

const App = () => {
  const [topping, setTopping] = useState("cheese");
  const [coloring, setColoring] = useState("blue");

  const updateTopping = (topping) => {
    setTopping(topping);
  }
  
  const updateColoring = newColoring => {
    console.log(newColoring);

    // coloring = newColring のようなことが起きている！
    setColoring(newColoring)
  }

  const pizzaSliceStyle = { color: 'transparent', 'textShadow': `0 0 0 ${coloring}`};

  useEffect(() => {
    console.log(`topping: ${topping}`);
  })
 
  return (
    <div className="App">
      <header className="App-header">
        <Pizza topping = {topping} coloring= {coloring}/>
        <form className="pizza__label">
          <label>Choose your topping:</label>
          <input
              onChange={e => {
                  updateTopping(e.target.value);
              }}
              type="text"
          ></input>
          <label>Choose your food coloring:</label>
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

const Pizza = (props) => {
  const pizza__style = { color: 'transparent', 'textShadow': `0 0 0 ${props.coloring}`}
  return (
  <div className="pizza">
    <div className="pizza__slice" style={pizza__style}>
      🍕
    </div>
    <h1 className="pizza__topping">
      {props.topping}
      {props.coloring}
    </h1>
  </div>);
}

export default App;
