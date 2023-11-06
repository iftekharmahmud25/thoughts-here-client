import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/')
                toast("You are successfully sign out");
            })
            .catch()
    }

    return (
        <div className="navbar bg-black text-white ms-0 ps-5 me-0 pe-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-52">

                        <li><NavLink to='/' className="ps-0 pe-1 simple-color">Home</NavLink></li>
                        <li><NavLink to='/AllBlogs' className="ps-0 pe-1 simple-color">All Blogs</NavLink></li>
                        <li><NavLink to='/AddBlog' className="ps-1 pe-1 simple-color">Add A Blogs</NavLink></li>
                        <li><NavLink to='/FeaturedBlogs' className="ps-1 pe-1 simple-color">Featured Blogs</NavLink></li>
                        <li>
                            <NavLink to='/Wishlist' className="ps-1 pe-0 simple-color">Wishlist</NavLink>
                        </li>
                    </ul>
                </div>
                <Link to='/'>
                    <div className="flex items-center gap-2">
                        <img className="w-8 h-8" src="/icons8-typewriter-with-paper-96.png" alt="icon" style={{ filter: 'invert(100%)' }} />
                        <p className="text-xl tracking-[.1em] hidden md:block text-white uppercase">ThoughtsHere</p>

                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex gap-0">
                <ul className="menu menu-horizontal  ps-0 pe-0">
                    <li><NavLink to='/AllBlogs' className="ps-0 pe-1 simple-color">All Blogs</NavLink></li>
                    <li><NavLink to='/AddBlog' className="ps-1 pe-1 simple-color">Add A Blogs</NavLink></li>
                    <li><NavLink to='/FeaturedBlogs' className="ps-1 pe-1 simple-color">Featured Blogs</NavLink></li>
                    <li>
                        <NavLink to='/Wishlist' className="ps-1 pe-0 simple-color">Wishlist</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <div className="flex items-center">
                        <p className="md:pe-3 pe-1">
                            <div className="rounded-full border-2 border-white">
                                <img
                                    className="rounded-full w-8 h-8"
                                    title={user.displayName}
                                    src={user.photoURL}
                                    alt=""
                                />
                            </div>
                        </p>
                    </div>
                }

                {
                    user ?
                        <button onClick={handleSignOut}><p className="uppercase text-sm underline underline-offset-4 tracking-[0.0.5em] simple-color">Log out</p></button>
                        :

                        <Link to='/login'><p className="uppercase text-sm underline underline-offset-4 tracking-[0.0.5em] simple-color">log in</p></Link>
                }

                {/* <Link to='/login'><p className="uppercase text-sm underline underline-offset-4 tracking-[0.0.5em] simple-animation">log in</p></Link> */}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;