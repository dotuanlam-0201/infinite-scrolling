import { Spin } from 'antd';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthenRoute from './AuthenRoute';
import LoginComponent from './modules/auth/LoginComponent';
import ErrorBoundary from './modules/error/ErrorComponent';
import NotFoundComponent from './modules/error/NotFoundComponent';
import PostComponent from './modules/post/PostComponent';
import PostsComponent from './modules/post/PostsComponent';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenRoute children={<PostsComponent />} />,
    loader: () => <Spin spinning />,
    errorElement: < ErrorBoundary />,
  },
  {
    path: "/login",
    element: <LoginComponent />,
    loader: () => <Spin spinning />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/post",
    element: <AuthenRoute children={<PostsComponent />} /> ,
    loader: () => <Spin spinning />,
    errorElement: < ErrorBoundary />,
  },
  {
    path: "/post/:id",
    element: <AuthenRoute children={<PostComponent />} /> ,
    loader: () => <Spin spinning />,
    errorElement: < ErrorBoundary />
  },
  {
    path: '*',
    element: <NotFoundComponent />,
    loader: () => <Spin spinning />,
  }
]);

function App() {
  return (
    <RouterProvider fallbackElement={<Spin spinning />} router={router} />
  )
}

export default App
