import React, { Suspense, lazy } from 'react';
import Home from './study/Home';

const Loading = <div>Loading...</div>;
const Study = lazy(() => import('./study/Study'));

const Example1 = lazy(() => import('./study/FirstExample'));
const Example2 = lazy(() => import('./study/Example2'));
const Example3 = lazy(() => import('./study/MyComponent'));
const Example4 = lazy(() => import('./study/EventPractice'));
const Example5 = lazy(() => import('./study/IterationSample'));
const Example6 = lazy(() => import('./study/InputSample'));
const Example7 = lazy(() => import('./study/Counter'));
const Example8 = lazy(() => import('./study/Info'));
const Example9 = lazy(() => import('./study/EffectVisible'));

const studiesRouter = [
  {
    path: 'study',
    // 하나니까 url parameter 정의 안함.
    element: (
      <Suspense fallback={Loading}>
        <Study />
      </Suspense>
    ),
  },

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
        {/* children - 파일 하나 더 생성 한것.*/}
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
  {
    path: 'studyseven',
    element: (
      <Suspense fallback={Loading}>
        <Example7 />
      </Suspense>
    ),
  },
  {
    path: 'studyeight',
    element: (
      <Suspense fallback={Loading}>
        <Example8 />
      </Suspense>
    ),
  },
  {
    path: 'studynine',
    element: (
      <Suspense fallback={Loading}>
        <Example9 />
      </Suspense>
    ),
  },
];

export default studiesRouter;
