import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="pizza">
            <div className="pizza__slice">
              🍕
            </div>
            <h1 className="pizza__topping">
              cheese
            </h1>
        </div>
        <form className="pizza__label">
          <label>Choose your topping:</label>
          <input
              type="text"
          ></input>
        </form>
      </header>
    </div>
  );
}


export default App;


// const topping = "cheese"
// const pizzaSliceStyle = null;
// const coloring = ""
// const pizzaSliceStyle = { color: 'transparent', 'textShadow': `0 0 0 ${coloring}`};

/* <label>Food coloring?:</label>
          <input
              type="text"
          ></input> */