import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import './App.css';
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const About = lazy(() => import("./pages/About/About.jsx"));
const Register = lazy(() => import("./pages/Register/Register.jsx"));
const Login = lazy(() => import("./pages/Login/Login.jsx"));
const Categories = lazy(() => import("./pages/Categories/Categories.jsx"));
const Bookmarks = lazy(() => import("./pages/Bookmarks/Bookmarks.jsx"));
const Default = lazy(() => import("./pages/DefaultPage/Default.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Default />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/categories",
        element: <Categories />
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />
      },


    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
]);
function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
