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
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: 'profiles/:username',
    element: (
      <Suspense fallback={Loading}>
        <Profile />
      </Suspense>
    ),
  },
  {
    path: 'articles',
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
