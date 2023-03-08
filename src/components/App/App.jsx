import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { countSlice } from "../../store/reducers/countReducer";

const CounterWithState = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setcount((prev) => prev + 1)}>+</button>
      <button
        onClick={() => {
          if (count <= 0) {
            setcount((prev) => prev);
            return;
          }
          setcount((prev) => prev - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

const CounterWithStore = () => {
  const { increment, decrement } = countSlice.actions;
  const { count } = useSelector((state) => state.CountReducer);
  const { count2 } = useSelector((state) => state.CountReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <h2>{count2}</h2>
      <button
        onClick={() => dispatch(increment(Math.ceil(Math.random() * 100)))}
      >
        RND+
      </button>
      <button
        onClick={() => dispatch(decrement(Math.ceil(Math.random() * 100)))}
      >
        RND-
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <CounterWithState />
      <hr />
      <CounterWithStore />
    </div>
  );
};

export default App;
