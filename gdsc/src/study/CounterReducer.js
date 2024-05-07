import React, { useReducer } from 'react';

function reducer(state, action) {
  // reducer 함수 = 설명서
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const CounterReducer = () => {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  //   reducer 함수를 받고 초기값 설정
  return (
    <div>
      {state.value}
      {/* <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-1</button> */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default CounterReducer;
