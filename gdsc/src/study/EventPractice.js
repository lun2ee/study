// import React, { useState } from 'react';

// const EventPractice = () => {
//   const [username, setUsername] = useState('');
//   const [message, setMessage] = useState('');

//   const onChangeUsername = (e) => setUsername(e.target.value);
//   const onChangeMessage = (e) => setMessage(e.target.value);
//   //input 은 onchange button 은 onclick
//   const onClick = () => {
//     alert(username + ':' + message);

//     //초기값으로 되돌아감. 초기화 시켜줘
//     setUsername('');
//     setMessage('');
//   };
//   const onKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       onClick();
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       <h1>이벤트 연습</h1>
//       <input
//         type="text"
//         name="username"
//         value={username}
//         //변수에 대입을 시켜줘야지 초기화가 됨.
//         placeholder="placeholder"
//         style={{ width: 150 }}
//         onChange={onChangeUsername}
//         onKeyPress={onKeyPress}
//         // onChange={onChangeMessage()} : 렌더링 되는 순간에 호출
//       />
//       {/* {{ width: 150 }} : 객체가 두래라서 중괄호 두개  */}
//       {/* const style 어쭈구 */}

//       <input
//         type="text"
//         name="message"
//         value={message}
//         placeholder="아무거나 입력해보세어"
//         style={{ width: 150 }}
//         onChange={onChangeMessage}
//         onKeyPress={onKeyPress}
//       />
//       <button style={{ width: 150 }} onClick={onClick}>
//         확인
//       </button>
//     </div>
//   );
// };

// export default EventPractice;

//업그래이드 버전
//username 과 message 를 합쳐놓음 . const로 하나로 묶어놓음
import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    // 변경시킨 값 setForm 을 전달 form 으로
    username: '',
    message: '',
    //객체 덩어리 input 창이 많아질때 쓰임. 하나의 함수를 만들어서 돌려 사용하자.
    // KEY:VALUE (카테고리 : 값)
    // ex. 키(key): 180(value) / 이름(key): 은진(value)
  });

  const { username, message } = form;

  const onChange = (e) => {
    // input 기능
    // 해당기능을 기능할 수 있게 호출
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
      //   name = username, message : name 을 유동적으로 바꿈. - '객체' 라고 할 수 있음
      // value : 입력한 값.
    };
    setForm(nextForm);
    // nextForm 에 있는 것을 setForm으로 업데이트 시켜주기
  };

  const onClick = () => {
    // button 기능
    // Onclick 은 event 그 자체 그래서 e 를 안받아도 됨
    alert(username + ':' + message);
    setForm({
      username: '', // username 이 key : ''가 value 임.
      message: '', // message 이 key : ''가 value 임.
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        // 명시된다
        value={username}
        //변수에 대입을 시켜줘야지 초기화가 됨.
        placeholder="placeholder"
        style={{ width: 150 }}
        onChange={onChange}
        //통합되어서 OnChange 로
        onKeyPress={onKeyPress}
        // onChange={onChangeMessage()} : 렌더링 되는 순간에 호출
        //html
      />
      {/* {{ width: 150 }} : 객체가 두래라서 중괄호 두개  */}
      {/* const style 어쭈구 : jsx */}

      <input
        type="text"
        name="message"
        value={message}
        placeholder="아무거나 입력해보세어"
        style={{ width: 150 }}
        onChange={onChange}
        //호출
        onKeyPress={onKeyPress}
      />
      <button style={{ width: 150 }} onClick={onClick}>
        확인
      </button>
    </div>
  );
};

export default EventPractice;
