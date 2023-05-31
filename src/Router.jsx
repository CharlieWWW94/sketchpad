import { createBrowserRouter } from 'react-router-dom';
import CanvasPage from './pages/CanvasPage/CanvasPage';
import HomePage from './pages/HomePage/HomePage';
import PadsPage from './pages/PadsPage/PadsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "edit_canvas",
    element: <CanvasPage />
  },
  {
    path: "pads_page",
    element: <PadsPage />
  }
])

export default router;
