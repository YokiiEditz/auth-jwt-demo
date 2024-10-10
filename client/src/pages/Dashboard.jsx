import { useReducer, useState } from "react";

const Dashboard = () => {
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducerFuns, { count: 1 });

  function reducerFuns(state, action) {
    switch (action.type) {
      case "plus":
        return { count: state.count + 1 };
      case "minus":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const increment = () => {
    // setCount(count + 1);
    console.log("state", state);
    dispatch({ type: "plus" });
  };

  const decrement = () => {
    // setCount(count + 1);
    dispatch({ type: "minus" });
  };

  return (
    <>
      <div>
        <h2>useReducer</h2>
        <p>{state.count}</p>

        <button onClick={increment}>Add + </button>
        <br />
        <button onClick={decrement}>Sub -</button>
      </div>

      {/* <div>
        <h2>UseState</h2>
        <p>{count}</p>

        <button onClick={increment}>Add + </button>
        <br />
        <button onClick={decrement}>Sub -</button>
      </div> */}
      <br />
      <br />
    </>
  );
};

export default Dashboard;
