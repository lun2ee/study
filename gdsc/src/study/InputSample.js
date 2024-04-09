import React, { useRef, useState } from 'react';

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    //placeholder 에다가 값 입력
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  //return => html
  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        ref={nameInput}
        value={name}
      />
      <input
        name="nickname"
        placeholder="별명"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b> 값: </b>
        {name}({nickname})
      </div>
    </div>
  );

  return <div>InputSample</div>;
};

export default InputSample;
