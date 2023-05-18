import { createBrowserRouter } from "react-router-dom";
import Parent from "../Layout/Parent";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Parent></Parent>,
    },
  ]);

export default router;
  
  