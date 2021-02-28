
const appHeaderEl = document.getElementsByClassName('App-header')[0];

console.log(appHeaderEl)

const pizzaEl = document.createElement('div')
pizzaEl.className = "pizza"
appHeaderEl.appendChild(pizzaEl);

const pizzaSlice = document.createElement('div')
pizzaSlice.className = "pizza__slice"
pizzaSlice.innerText = "🍕"
pizzaEl.appendChild(pizzaSlice)

const pizzaTopping = document.createElement('h1')
pizzaTopping.className = "pizza__topping"
pizzaTopping.innerText = "チーズ"
pizzaEl.appendChild(pizzaTopping)


const pizzaForm = document.createElement('form')
pizzaForm.className = "pizza__label"
appHeaderEl.appendChild(pizzaForm)

const pizzaLabel = document.createElement('label')
pizzaLabel.innerText = "Choose your topping:"
pizzaForm.appendChild(pizzaLabel)

const pizzaText = document.createElement('input')
pizzaText.type = "text"
pizzaForm.appendChild(pizzaText)

// // inputに入力された文字であいさつのテキストを書き換える
function render() {
  pizzaTopping.innerText = `${pizzaText.value}!`;
}

// // キーボードのイベントを検知したら render関数を呼び出す
pizzaText.addEventListener("keyup", () => {
  render();
});

// <div className="App">
//   <header className="App-header">
//     <div className="pizza">
//         <div className="pizza__slice">
//           🍕
//         </div>
//         <h1 className="pizza__topping">
//           cheese
//         </h1>
//     </div>
//     <form className="pizza__label">
//       <label>Choose your topping:</label>
//       <input
//           type="text"
//       ></input>
//     </form>
//   </header>
// </div>


// const pizzaSliceStyle = null;
// const coloring = ""
// const pizzaSliceStyle = { color: 'transparent', 'textShadow': `0 0 0 ${coloring}`};

// <label>Food coloring?:</label>
// <input
//     type="text"
// ></input>

















// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="pizza">
//             <div className="pizza__slice">
//               🍕
//             </div>
//             <h1 className="pizza__topping">
//               cheese
//             </h1>
//         </div>
//         <form className="pizza__label">
//           <label>Choose your topping:</label>
//           <input
//               type="text"
//           ></input>
//         </form>
//       </header>
//     </div>
//   );
// }



// const topping = "cheese"
// const pizzaSliceStyle = null;
// const coloring = ""
// const pizzaSliceStyle = { color: 'transparent', 'textShadow': `0 0 0 ${coloring}`};

/* <label>Food coloring?:</label>
          <input
              type="text"
          ></input> */