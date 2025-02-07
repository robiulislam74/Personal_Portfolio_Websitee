import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
    },
  ]);

  export default router
