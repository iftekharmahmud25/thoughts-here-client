import { useContext, useState } from "react";
import SocialLogin from "../../shared/socialLogin/SocialLogin";
import NavLog from "./NavLog/NavLog";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [loginError, setLoginError] = useState(null);

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    
        signIn(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
            toast('Login successful'); 
          })
          .catch((error) => {
            console.log(error)
            toast.error(error.message);
            setLoginError(error.message);
    
          });
    
    }
    return (
        <div>
            <NavLog></NavLog>
            <div className="flex items-center justify-center w-[100%] mx-auto ">
     
      <div className='md:w-[50%]'>
     
        <form onSubmit={handleLogin} className="">
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold ps-[25%]">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered w-[50%] h-[30px] mx-auto rounded-none "
            />
          </div>
          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold ps-[25%]">Password</span>
            </label>
            <input
              type='password'
              name="password"
              placeholder="password"
              className="input input-bordered w-[50%] h-[30px] mx-auto rounded-none"
            />
          </div>
          {/* submit button */}
          <div className="form-control mt-6">
            <input
              className="bg-[#84558d] text-white w-[50%] h-[30px] mx-auto rounded-none"
              type="submit"
              value="Sign In"
            />
          </div>
        </form>
        {loginError && (
          <div className="text-center text-red-700 mt-4">{loginError}</div>
        )}
        <p className='text-center pt-4'>
          New here?
          <Link to="/signUp">
            <span className="font-semibold text-[#84558d]">Create a New Account</span>
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
      <ToastContainer></ToastContainer>
      </div>
            
        </div>
    );
};

export default Login;