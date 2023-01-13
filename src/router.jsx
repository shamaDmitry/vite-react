import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ShowsPage from "./pages/ShowsPage";
import Page404 from './pages/Page404'

let router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Page404 />,
  },
  {
    path: "/shows",
    element: <ShowsPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  }
]);

export default router;