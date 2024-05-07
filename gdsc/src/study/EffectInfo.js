import React, { useEffect, useState } from 'react';

const EffectInfo = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  useEffect(() => {
    //렌더링 된 후  훅스를 관리하는  훅스가 useEffect 에 따라서 마지막에 실행되는 훅스.
    console.log('렌더링이 완료되었습니다.');
    console.log({ name, nickName });
    return () => {
      //엄마운트 (리액트 사라질때) => cleanup
      console.log('cleanup');
      console.log(name);
    };
    //{객체형식}
  }, [name, nickName]); //마운트 시와 name 이 업데이트 될때 실행, 마운트가 끝날때 cleanup 실행.
  // 업데이트 될 때마다 렌더링이 된다. 모든 이벤트에 실행

  //   useEffect(() => {
  //     console.log('렌더링이 완료되었습니다.');
  //     console.log({ name, nickName });
  //     //{객체형식}
  //   },[]); -> 처음 mount 마운트 될때만 실행

  //   useEffect(() => {
  //     console.log('렌더링이 완료되었습니다.');
  //     console.log({ name, nickName });
  //     //{객체형식}
  //   },[name]); -> 마운트 시와 name이 업데이트 될때만 실행.

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  return (
    <div>
      <div>
        <input onChange={onChangeName} value={name} />
        <input onChange={onChangeNickName} value={nickName} />
        {/* <input onChange={onChangeName} value={name} />
        <input onChange={onChangeNickName} value={nickName} /> */}
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
      </div>
      <div>
        <div>
          <b>닉네임:</b>
          {nickName}
        </div>
      </div>
    </div>
  );
};

export default EffectInfo;
