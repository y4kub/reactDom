import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import About from "../pages/about";
import NoteList from "../pages/noteList";
import NoteDetails from "../pages/noteDetails";
import ErrorPage from "../pages/errorPage";
import UserList from "../pages/allUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/noteList", element: <NoteList /> },
      { path: "/notes/:postId", element: <NoteDetails /> },
      { path: "/allUsers", element: <UserList /> },
    ],
  },
]);
