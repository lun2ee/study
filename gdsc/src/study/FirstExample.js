import { useState } from 'react';

function Example1() {
  const [channame, setChanegename] = useState('리액트');
  // 상수를 변수처럼 쓰기 위해서 useState 사용
  const onchange = (e) => {
    setChanegename(e.target.value);
  };

  return (
    <>
      {channame === '리액트' ? <h1>리엑트입니다.</h1> : <h1>리엑트아님</h1>}

      <input onChange={onchange} />
    </>
  );
}

export default Example1;
