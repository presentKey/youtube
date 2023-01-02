import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Search from './pages/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/videos/:keyword', element: <Search /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
