import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  developer1: {
    // url pARAMETER
    // 안에 나올 내용 객체들
    name: '은진',
    description: '4학년',
  },
  developer2: {
    name: '용찬',
    description: '바보',
  },
};

const Profile = () => {
  const params = useParams();
  const basket = data[params.username];
  // basket 은 url parameter
  //url parameter = developer1,2
  // hooks => ()

  return (
    <div>
      <h2> 사용자 프로필</h2>
      {basket ? (
        <div>
          {/* 참일때 developer 1,2 */}
          <h3>{basket.name}</h3>
          <h3>{basket.description}</h3>
        </div>
      ) : (
        // 거짓은 developer 1,2 가 아닐때
        <h2>존재하지 않는 값이다.</h2>
      )}
    </div>
  );
};

export default Profile;
