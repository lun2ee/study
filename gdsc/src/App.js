import { RouterProvider } from 'react-router-dom';
// router 라이브러리 -- terminal: yarn add react-router-dom 으로 정의내림.
import studyRouter from './router';
import MyComponent from './study/MyComponent';
import Say from './study/Say';

const App = () => {
  return (
    <>
      <RouterProvider router={studyRouter} />
      <Say></Say>
    </>
  );
};

export default App;
