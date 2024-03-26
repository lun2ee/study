import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');

  const onClickEnter = () => setMessage('안녕히가세요');
  const onClickLeave = () => setMessage('안녕하세요');

  //   화살표 함수
  //   ()=>{return}
  //   ----------------------
  //   바로리턴
  //   ()=>()
  //   () =>

  return (
    <div>
      <button onClick={() => onClickEnter()}>입장</button>
      {/* 이벤트가 들어올때까지 기다려 */}
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
