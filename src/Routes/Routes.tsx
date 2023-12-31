import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import AllBooks from "../Pages/AllBooks/AllBooks";
import NotFound from "../Pages/NotFound/NotFound";
import BookDetails from "../Pages/BookDetails/BookDetails";
import Create from "../components/Create/Create";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Update from "../Pages/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/allbooks",
        element: <AllBooks />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails />,
      },
      {
        path: "/updatebook/:id",
        element: <Update />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/create-book",
        element: (
          <PrivateRoute>
            <Create></Create>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
