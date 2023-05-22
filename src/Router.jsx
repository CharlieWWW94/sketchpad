import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CanvasPage from './pages/CanvasPage/CanvasPage';
import HomePage from './pages/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "edit_canvas",
    element: <CanvasPage />
  }
])

export default router;
