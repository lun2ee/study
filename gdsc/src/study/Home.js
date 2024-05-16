import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p> 가장 먼저 보여지는 페이지</p>
      <li>
        {' '}
        <Link to="/about">소개</Link>
        {/* 라우터를 통한 링크를 연결하기 때문에 라우터의 코드를 확인해봐야한다. */}
      </li>
      {/* 마치,,,like,,, 유튜브의 대댓글 */}
      {/* a 태그는 전체다 렌더링 따라서 link 가 효율적 */}
      <li>
        {' '}
        <Link to="/profiles/developer1">은진</Link>
      </li>
      <li>
        {' '}
        <Link to="/profiles/developer2">바보</Link>
      </li>
      <li>
        {' '}
        <Link to="/articles">게시글</Link>
      </li>
      <li>
        {' '}
        <Link to="/study"> 스터디</Link>
      </li>
    </div>
  );
};

export default Home;
