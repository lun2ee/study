import React from 'react';
import useInput from '../hooks/useInput';

const InfoCustomer = () => {
  const [state, onChange] = useInput({ name: '', nickname: '' });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        {/* input => onchange */}
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>
      <div>
        <div>
          <b>이름: </b>
          {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default InfoCustomer;
