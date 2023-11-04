import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-black text-white ms-0 ps-5 me-0 pe-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-52">
                    <li><Link>All Blogs</Link></li>
                    <li><Link>Add A Blogs</Link></li>
                    <li><Link>Featured Blogs</Link></li>
                    <li><Link>Wishlist</Link></li>
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
                <ul className="menu menu-horizontal ps-0 pe-0">
                    <li><Link className="ps-0 pe-1">All Blogs</Link></li>
                    <li><Link className="ps-1 pe-1">Add A Blogs</Link></li>
                    <li><Link className="ps-1 pe-1">Featured Blogs</Link></li>
                    <li><Link className="ps-1 pe-0">Wishlist</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login'><p className="uppercase text-sm underline underline-offset-4 tracking-[0.0.5em] simple-animation">log in</p></Link>
            </div>
        </div>
    );
};

export default Navbar;