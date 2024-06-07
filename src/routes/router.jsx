import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import DetailPage from "../pages/DetailPage/DetailPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import HomePage from "../pages/HomePage/HomePage";
import MyPage from "../pages/MyPage/MyPage";
import AddPreview from "../pages/NewPost/AddPreview";
import NewPost from "../pages/NewPost/NewPost";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "/feed",
        element: <FeedPage />,
      },
      {
        path: "/mypage/:id",
        element: <MyPage />,
      },
    ],
  },
  {
    path: "/write",
    element: <NewPost />,
  },
  {
    path: "/write/preview",
    element: <AddPreview />,
  },
]);

export default router;
