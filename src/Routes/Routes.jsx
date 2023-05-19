import { createBrowserRouter } from "react-router-dom";
import Parent from "../Layout/Parent";
import Home from "../Layout/Home";
import Blog from "../Layout/blog";

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
          path:'/blogs',
          element:<Blog></Blog>
        }
      ]
    },
  ]);

export default router;
  
  