import classes from './Counter.module.css';
import redux, {store} from "../store/index"
import React from "react"
const Counter = () => {
  const toggleCounterHandler = () => {
    store.dispatch({type: "increment"})
  };
  const [counter, setCounter] = React.useState("")
  function changeHandler(){
    const state = store.getState()
    setCounter(state.counter)
  }
  store.subscribe(changeHandler)

  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
