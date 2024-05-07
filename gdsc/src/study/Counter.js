import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  //setValue = 업데이트
  // value 는 읽기 전용, setValue 는 쓰기 전용

  const onClick = () => {};
  return (
    <div>
      <p>
        현재 카운터 값은 <b> {value}입니다. </b>
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
