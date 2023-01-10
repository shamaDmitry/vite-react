import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ShowsPage from "./pages/ShowsPage";
import Page404 from './pages/Page404'

let router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <Page404 />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "shows",
        element: <ShowsPage />,
      },
    ],
  },
]);

export default router;