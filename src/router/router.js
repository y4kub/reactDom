import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import About from "../pages/about";
import NoteList from "../pages/noteList";
import NoteDetails from "../pages/noteDetails";
import ErrorPage from "../pages/errorPage";

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
    ],
  },
]);
// export default function AppRoutes() {
//   path:"/",
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="list" element={<NoteList />} />
//         <Route path="posts" element={<NoteDetails />} />
//       </Route>
//     </Routes>
//   );
// }
