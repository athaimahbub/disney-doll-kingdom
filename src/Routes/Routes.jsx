import { createBrowserRouter } from "react-router-dom";
import Parent from "../Layout/Parent";
import Home from "../Layout/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Parent></Parent>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

export default router;
  
  