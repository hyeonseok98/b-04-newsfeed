import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import DetailPage from "../pages/DetailPage/DetailPage";
import HomePage from "../pages/HomePage/HomePage";
import FeedPage from "../pages/FeedPage/FeedPage";
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
        // path는 /닉네임/id로 구성될 예정
        path: "/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "/feed", // FeedPage 경로 추가
        element: <FeedPage />,
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
