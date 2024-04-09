import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setName] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈 ' },
    { id: 4, text: '바람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      onClick();
    }
  };

  const onForm = (e) => {
    onClick();
    e.preventDefault();
    //서버로 보내려는 속성을 가지고 있어서 이거를 쓰지않으면은 값이 안나온다 렌더링이 안됨. reDirect 입력한 값들이 휘발됨.
  };

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setName(nextNames);
    setInputText(''); //초기화 시켜주기
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    //부정의 부정
    // name.id !== id 에 해당되는 객체들을 더블클릭으로 필터링 함.
    // name.id !== id 조건이 true 인 값이 렌더링 된다. false 일때는 제거되고
    // 그냥 외우자. 제발 그냥 외워 이해안되니까 그냥 외우자.
    //4!==4 false
    //4!==5 true

    //4===4 true
    //4===5 false

    //filter - 자기가 원하는 함수가 필터링 됨.
    setName(nextNames);
  };

  const nameList = names.map((name, index) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  //callback 함수 : 함수안에 다른 함수로 인자를 넣는다. 겁나 어려움 주의
  //까먹지 말자 :" arrow function{component } export"
  //()=>()
  //()=>
  //()=>{return}

  return (
    <form onSubmit={onForm}>
      <input value={inputText} onChange={onChange} />
      <button type="submit">추가</button>
      <ul>{nameList}</ul>
    </form>
  );
};

export default IterationSample;

//rafce
