import { createBrowserRouter } from "react-router-dom";
import Parent from "../Layout/Parent";
import Home from "../Layout/Home";
import Blog from "../Layout/blog";
import Login from "../Layout/Login";
import Registration from "../Layout/Registration";
import PrivateRoutes from "./PrivateRoutes";
import AddToy from "../Layout/AddToy";
import MyToy from "../Layout/MyToy";
import NotFoundPage from "../Component/NotFoundPage";
import ToyKingdom from "../Layout/ToyKingdom";
import SingleToy from "../Layout/SingleToy";

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
        },
        {
          path:'registration',
          element:<Registration></Registration>
        },
        {   path:'allToys',
            element: <ToyKingdom></ToyKingdom>
        },
        {
            path:'singleToy/:id',
            element: <PrivateRoutes> <SingleToy></SingleToy> </PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/addToy/${params.id}`)
        },
        {
          path:'addToy',
          element:<PrivateRoutes> <AddToy></AddToy> </PrivateRoutes>,
          // loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        },
        {
          path:'myToys',
          element:<PrivateRoutes> <MyToy></MyToy> </PrivateRoutes>
        },
        
      ]
    },
    {
      path:'*',
      element:<NotFoundPage></NotFoundPage>
    }
  ]);

export default router;
  
  