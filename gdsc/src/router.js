import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import Example2 from './study/Example2';
// import Example1 from './study/FirstExample';

const Loading = <div>Loading...</div>;
const Example1 = lazy(() => import('./study/FirstExample'));
const Example2 = lazy(() => import('./study/Example2'));
const Example3 = lazy(() => import('./study/MyComponent'));

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
        <Example3>ㅗ</Example3>
      </Suspense>
    ),
  },
]);

export default studyRouter;
