import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";


const Main = () => {
    const location = useLocation();
    const pathsToHideNavbarAndFooter = ["/login", "/signUp"];
    const shouldHideNavbarAndFooter = pathsToHideNavbarAndFooter.includes(location.pathname);

    return (
        <div>
            {!shouldHideNavbarAndFooter && <Navbar />}
            <Outlet />
            {!shouldHideNavbarAndFooter && <Footer />}
        </div>
    );
};

export default Main;