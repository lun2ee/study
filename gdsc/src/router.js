import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import Example2 from './study/Example2';
// import Example1 from './study/FirstExample';

//컴포넌트를 불러오는것
//파일명을 내가 원하는 변수 이름으로 정의함.

const Loading = <div>Loading...</div>;
const Example1 = lazy(() => import('./study/FirstExample'));
const Example2 = lazy(() => import('./study/Example2'));
const Example3 = lazy(() => import('./study/MyComponent'));
const Example4 = lazy(() => import('./study/EventPractice'));
const Example5 = lazy(() => import('./study/IterationSample'));
const Example6 = lazy(() => import('./study/InputSample'));

const studyRouter = createBrowserRouter([
  {
    path: 'studyone',
    element: (
      <Suspense fallback={Loading}>
        <Example1 />
      </Suspense>
    ),
  },
  {
    path: 'studytwo',
    element: (
      <Suspense fallback={Loading}>
        <Example2 />
      </Suspense>
    ),
  },
  {
    path: 'studythree',
    element: (
      <Suspense fallback={Loading}>
        <Example3>^^</Example3>
      </Suspense>
    ),
  },
  {
    path: 'studyfour',
    element: (
      <Suspense fallback={Loading}>
        <Example4>^^</Example4>
        {/* //children */}
      </Suspense>
    ),
  },
  {
    path: 'studyfive',
    element: (
      <Suspense fallback={Loading}>
        <Example5 />
      </Suspense>
    ),
  },
  {
    path: 'studysix',
    element: (
      <Suspense fallback={Loading}>
        <Example6 />
      </Suspense>
    ),
  },
]);

export default studyRouter;
