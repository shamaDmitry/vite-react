import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";

let router = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "gallery",
          element: <GalleryPage />,
        },
      ],
    },
  ]);

  export default router;