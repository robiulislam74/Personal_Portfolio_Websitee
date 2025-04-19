import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home";
import ProjectDetail from "../Pages/ProjectDetail";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
      ]
    },
    {
      path: "/projects/:id",
      element: <ProjectDetail/>
    }
  ]);

  export default router
