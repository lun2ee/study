import React, { useState } from 'react';

const Info = () => {
  const [form, setForm] = useState({
    //   const [name, setName] = useState('');
    //   const [nickName, setNickName] = useState('');
    name: '',
    nickName: '',
  });
  const { name, nickName } = form;

  //   const onChangeName = (e) => setName(e.target.value);
  //   const onChangeNickName = (e) => setNickName(e.target.value);
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.id]: e.target.value,
    };
    setForm(nextForm);
  };
  return (
    <div>
      <div>
        <input onChange={onChange} value={name} id="name" />
        <input onChange={onChange} value={nickName} id="nickName" />
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

export default Info;
