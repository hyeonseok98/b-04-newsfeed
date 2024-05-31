import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import DetailPage from "../pages/DetailPage/DetailPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      /*
      {
        path: "",
        element: <DetailPage />,
      },
      */
    ],
  },
]);

export default router;
