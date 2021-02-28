const Pizza = (props) => {
  const pizzaSliceStyle = props.coloring === "" ? null : { color: 'transparent', 'textShadow': `0 0 0 ${props.coloring}`};
  
  console.log(`pizzaSliceStyle ${pizzaSliceStyle}`)
  
  return (
    <div>
      <div className="pizza">
          <div className="pizza__slice" style={pizzaSliceStyle}>
            🍕
          </div>
          <h1 className="pizza__topping">
            {props.topping}
          </h1>
      </div>
    </div>
  );
}

export default Pizza;
