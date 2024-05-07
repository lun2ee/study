import { RouterProvider } from 'react-router-dom';
// router 라이브러리 -- terminal: yarn add react-router-dom 으로 정의내림.
import studyRouter from './router';
import EffectInfo from './study/EffectInfo';
import Info from './study/Info';
import Counter from './study/Counter';
import CounterReducer from './study/CounterReducer';
import InputReducer from './study/InputReducer';
import Average from './study/AverageMemo';
import AverageCallback from './study/AverageCallback';
import InfoCustomer from './study/InfoCustomer';

// import MyComponent from './study/MyComponent';
// import Say from './study/Say';
// import EventPractice from './study/EventPractice';
// import InputSample from './study/InputSample';
// import IterationSample from './study/IterationSample';

const App = () => {
  return (
    <>
      <RouterProvider router={studyRouter} />
      {/* <EventPractice></EventPractice> */}
      {/* <EffectInfo />
      <Info /> */}
      {/* <CounterReducer /> */}
      {/* <InputReducer /> */}
      {/* <AverageMemo /> */}
      {/* <AverageMemo /> */}
      {/* <AverageCallback />
      <InfoCustomer /> */}
    </>
  );
};

export default App;
