import React from 'react';
import { useParams } from 'react-router-dom';

//프라이빗하게 이 컴포넌트 내에서만 사용 (보안성 굿) private
const data = {
  developer1: {
    name: '최은진',
    discription: '4학년',
  },

  developer2: {
    name: '현용찬',
    discription: '찐찌버거',
  },
};

const Profile = () => {
  const params = useParams();
  const Profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {Profile ? (
        <div>
          <h2> {Profile.name} </h2>
          <h2> {Profile.discription} </h2>
        </div>
      ) : (
        //있을때 뜨는거
        <p>존재하지 않는 프로필입니다.</p>
        //없을때 뜨는거
      )}
    </div>
  );
};

export default Profile;
