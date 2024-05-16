import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  developer1: {
    name: 'dmsws',
    description: 'dnjs',
  },
  developer2: {
    name: 'dmsws',
    description: 'dnjs',
  },
};

const Repeat = () => {
  const params = useParams();
  const basket = data[params.username];

  return (
    <div>
      <h2>제목</h2>
      {basket ? (
        <div>
          <h2>이름:{basket.name}</h2>
          <h2> 나이 :{basket.description}</h2>
        </div>
      ) : (
        <h2>존재무</h2>
      )}
    </div>
  );
};

export default Repeat;
