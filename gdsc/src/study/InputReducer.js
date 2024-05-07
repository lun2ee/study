import React, { useReducer } from 'react';

//reduce ==
//역행 할수있음 - 불변성 유지 가능
//도르마무

function reducer(state, action) {
  //action 이 eventTarget
  return {
    ...state,
    //객체의 상태를 그대로
    // state.name & state.nickname
    [action.name]: action.value,
    // = [e.target.name]
  };
}

const InputReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;
  const onChang = (e) => {
    dispatch(e.target);
  };

  //view
  return (
    <div>
      <div>
        {/* input => onchange */}
        <input name="name" value={name} onChange={onChang}></input>
        <input name="nickname" value={nickname} onChange={onChang}></input>
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

export default InputReducer;
