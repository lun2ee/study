import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Study = () => {
  return (
    <div>
      <h2>Study 내용 </h2>
      <Outlet />
      <ul>
        <li>
          <Link to="/studyone"> studyone</Link>
        </li>
        <li>
          <Link to="/studytwo"> studytwo</Link>
        </li>
        <li>
          <Link to="/studythree"> studythree</Link>
        </li>
        <li>
          <Link to="/studyfour"> studyfour</Link>
        </li>
        <li>
          <Link to="/studyfive"> studyfive</Link>
        </li>
        <li>
          <Link to="/studysix"> studysix</Link>
        </li>
        <li>
          <Link to="/studyseven"> studyseven</Link>
        </li>
        <li>
          <Link to="/studyeight"> studyeight</Link>
        </li>
        <li>
          <Link to="/studynine"> studynine</Link>
        </li>
      </ul>
    </div>
  );
};

export default Study;
