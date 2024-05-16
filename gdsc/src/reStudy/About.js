import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const detail = searchParams.get('detail');

  const onDetail = () => {
    //수정
    setsearchParams({ mode, detail: detail === 'true' ? false : true });
  };
  const onMode = () => {
    // 추가
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setsearchParams({ mode: nextMode, detail });
  };

  return (
    <>
      <h2> 소개 </h2>
      <p> 리액트 라우터를 소개하는 페이지</p>
      <p>detail: </p> {detail}
      <p>mode: </p> {mode}
      <button onClick={onDetail}> ToggleDetail </button>
      <button onClick={onMode}> mode+1 </button>
    </>
  );
};

export default About;
