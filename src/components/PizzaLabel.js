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

export default PizzaLabel;