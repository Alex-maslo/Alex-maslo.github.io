import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import SingleUsersDetailsPage from "../components/SingleUsersDetailsPage.tsx";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "users",
        element: <UsersPage />,
        children: [
          {
            path: "posts/:userId",
            element: <PostsPage />,
          },
        ],
      },
      { path: "users/details", element: <SingleUsersDetailsPage /> },
      { path: "posts", element: <PostsPage /> },
    ],
  },
]);
