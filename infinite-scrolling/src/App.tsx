import { Spin } from 'antd';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthenRoute from './AuthenRoute';
import LoginComponent from './modules/auth/LoginComponent';
import ErrorBoundary from './modules/error/ErrorComponent';
import NotFoundComponent from './modules/error/NotFoundComponent';
import PostComponent from './modules/post/PostComponent';
import PostsComponent from './modules/post/PostsComponent';
import GlobalLoading from './modules/layout/GlobalLoading';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenRoute children={<PostsComponent />} />,
    loader: () => <GlobalLoading />,
    errorElement: < ErrorBoundary />,
  },
  {
    path: "/login",
    element: <LoginComponent />,
    loader: () => <GlobalLoading />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/post",
    element: <AuthenRoute children={<PostsComponent />} /> ,
    loader: () => <GlobalLoading />,
    errorElement: < ErrorBoundary />,
  },
  {
    path: "/post/:id",
    element: <AuthenRoute children={<PostComponent />} /> ,
    loader: () => <GlobalLoading />,
    errorElement: < ErrorBoundary />
  },
  {
    path: '*',
    element: <NotFoundComponent />,
    loader: () => <GlobalLoading />,
  }
]);

function App() {
  return (
    <RouterProvider fallbackElement={<GlobalLoading />} router={router} />
  )
}

export default App
