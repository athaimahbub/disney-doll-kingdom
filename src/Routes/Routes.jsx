import { createBrowserRouter } from "react-router-dom";
import Parent from "../Layout/Parent";
import Home from "../Layout/Home";
import Blog from "../Layout/blog";
import Login from "../Layout/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Parent></Parent>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'blogs',
          element:<Blog></Blog>
        },
        {
          path:'login',
          element:<Login></Login>
        }
      ]
    },
  ]);

export default router;
  
  