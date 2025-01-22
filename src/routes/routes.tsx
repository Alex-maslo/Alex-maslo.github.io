import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import MainPage from "../pages/MainPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/posts", element: <PostsPage /> },
    ],
  },
]);
