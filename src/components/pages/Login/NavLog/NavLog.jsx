import { Link } from "react-router-dom";

const NavLog = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="flex-1 ms-4">
                <Link to='/'><div className="flex items-center">
                    <img width="17" height="17" src="https://img.icons8.com/ios/50/back--v1.png" alt="back--v1" />
                    <p className="">Back</p>
                </div></Link>
            </div>
            <div className="flex-none">
                <Link to='/signUp'><p className="me-4 uppercase text-sm border-b border-black underline underline-offset-4 tracking-[0.0.5em] ">Create account</p></Link>
            </div>
        </div>
        <div>
            <p className="text-[23px] text-center my-4 font-semibold">Log into Thoughtshere</p>
        </div>
        </div>
    );
};

export default NavLog;