import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="cart">
        <h2>Number of items in Cart: {counter}</h2>
        <button className="green" onClick={() => dispatch(increment())}>
          Add Item to Cart
        </button>
        <button
          disabled={counter > 0 ? false : true}
          className="red"
          onClick={() => dispatch(decrement())}
        >
          Remove Item from Cart
        </button>
      </div>
    </div>
  );
}

export default App
