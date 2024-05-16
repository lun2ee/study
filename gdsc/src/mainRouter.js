import { Suspense, lazy } from 'react';
import Home from './study/Home';

const Loading = <div>Loading...</div>;
const Articles = lazy(() => import('./study/Articles'));
const Article = lazy(() => import('./study/Article'));

const About = lazy(() => import('./study/About'));
const Profile = lazy(() => import('./study/Profile'));
const mainRouter = [
  {
    path: '',
    element: (
      <Suspense fallback={Loading}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '',
    element: (
      <Suspense fallback={Loading}>
        <Profile />
      </Suspense>
    ),
  },
  {
    path: 'about',
    // 하나니까 url parameter 정의 안함.
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: 'profiles/:username',
    // = url parameter 정의할때 이렇게 쓴다 (외워)

    element: (
      <Suspense fallback={Loading}>
        <Profile />
      </Suspense>
    ),
  },
  {
    path: 'articles',
    // url 파라미터를 articles 로 등록을 해줄게
    element: (
      <Suspense fallback={Loading}>
        <Articles />
      </Suspense>
    ),
    children: [
      {
        path: ':id',
        element: (
          <Suspense fallback={Loading}>
            <Article />
          </Suspense>
        ),
      },
    ],
  },
];

export default mainRouter;
