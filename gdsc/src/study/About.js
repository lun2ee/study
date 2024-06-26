import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');
  // 파라미터 추출
  // const location = useLocation();

  const onToggleDetail = () => {
    setsearchParams({ mode, detail: detail === 'true' ? false : true });
  };
  // 파라미터 수정

  const onIncrease = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setsearchParams({ mode: nextMode, detail });
  };
  // 파라미터 추가.

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해보는 프로젝</p>
      <p>detail: {detail} </p>
      <p>mode: {mode} </p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncrease}>mode+1</button>
    </div>
  );
};

export default About;
