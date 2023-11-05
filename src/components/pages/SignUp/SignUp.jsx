import { ToastContainer, toast } from "react-toastify";
import SignLog from "./signLog/SignLog";
import SocialLogin from "../../shared/socialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const SignUp = () => {
    const { createUser,updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const from = location.state?.from || "/"
    

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password,photoURL)
        if (password.length < 6) {
            return toast('Password should be at least 6 characters or longer')
          } else if (!/[A-Z]/.test(password)) {
            return toast('Your password should have at least one uppercase letter (A-Z)')
          } else if (!/[!@#$%^&*]/.test(password)) {
            return toast('Your password should have at least one special character')
          }
          createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            
             
            
            fetch('http://localhost:5000/users',{
                  method : 'POST',
                  headers :{
                     'content-type' : 'application/json'
                  },
                  body : JSON.stringify(user)
             })
             .then(res => res.json())
             .then(data =>{ 
                console.log(data)
                
                if(data.insertedId)
                 {  
                    updateUserProfile(name, photoURL)
                    navigate(from, { replace: true });  
                    return toast('user has been created successfully')
                   
                 }
             })
          })
          .catch(error =>{
            console.log(error)
       })
    }
    return (
        <div>
            <SignLog></SignLog>
            <div className='justify-center flex w-[100%] mx-auto'>
           
            <div className='md:w-[50%]'>
                
                <form onSubmit={handleSignUp} >
                    {/* name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold ps-[25%]">Name</span>
                        </label>
                        <input
                            type="name"
                            name="name"
                            placeholder="Your Name"
                            className="input input-bordered w-[50%] h-[30px] mx-auto rounded-none"
                        />
                    </div>
                    {/* photo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold ps-[25%]">Image URL</span>
                        </label>
                        <input
                            type="photoURL"
                            name="photoURL"
                            placeholder="Your Image URL"
                            className="input input-bordered  w-[50%] h-[30px] mx-auto rounded-none"
                        />
                    </div>
                    {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold ps-[25%]">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered  w-[50%] h-[30px] mx-auto rounded-none"
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
                            className="input input-bordered  w-[50%] h-[30px] mx-auto rounded-none"
                        />
                    </div>
                    {/* submit button */}
                    <div className="form-control mt-6">
                        <input
                            className="bg-[#84558d] text-white  w-[50%] h-[30px] mx-auto  "
                            type="submit"
                            value="Sign Up"
                        />
                    </div>
                </form>
                <p className='text-center pt-4'>
                    Already have an account?
                    <Link to="/login">
                        <span className="font-semibold text-[#84558d]">Login</span>
                    </Link>
                </p>
                {/* <SocialButton></SocialButton> */}
                <SocialLogin></SocialLogin>
            </div>
            <ToastContainer />
        </div>
        </div>
    );
};

export default SignUp;