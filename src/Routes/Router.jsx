import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home";
import AboutMe from "../Sections/AboutMe";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <AboutMe/>
        }
      ]
    },
  ]);

  export default router
