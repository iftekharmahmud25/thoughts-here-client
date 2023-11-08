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
import Errorpage from "../pages/errorpage/Errorpage";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import DetailsBlogInWishlist from "../pages/Wishlist/DetailsBlogInWishlist";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <Errorpage></Errorpage>,
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
            element : <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
        },
        {
            path : "/AllBlogs",
            element : <AllBlogs></AllBlogs>
        },
        {
            path : "/Wishlist",
            element : <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
        },
        {
            path : "/FeaturedBlogs",
            element : <FeaturedBlogs></FeaturedBlogs>
        },
        {
            path : '/blogs/:id',
            element : <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
            loader : ({params}) => fetch (`http://localhost:5000/blogs/${params.id}`)
        },
        {
            path: "/wishlist/:id",
            element : <PrivateRoute><DetailsBlogInWishlist></DetailsBlogInWishlist></PrivateRoute>,
            loader : ({params}) => fetch (`http://localhost:5000/wishlist/${params.id}`)
        }
      ]
    },
  ]);

