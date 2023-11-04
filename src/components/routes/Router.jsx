import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddBlog from "../pages/AddBlog/AddBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import Wishlist from "../pages/Wishlist/Wishlist";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children :[
        {
            path :"/",
            element : <Home></Home>
        },
        {
            path : "/login",
            element : <Login></Login>
        },
        {
            path : "/signUp",
            element : <SignUp></SignUp>
        },
        {
            path : "/AddBlog",
            element : <AddBlog></AddBlog>
        },
        {
            path : "/AllBlogs",
            element : <AllBlogs></AllBlogs>
        },
        {
            path : "/Wishlist",
            element : <Wishlist></Wishlist>
        },
        {
            path : "/FeaturedBlogs",
            element : <FeaturedBlogs></FeaturedBlogs>
        }
      ]
    },
  ]);

