import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const { setLoading, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // Handle google signin
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user);
                const user = result.user;
                console.log(user);
                updateUserProfile(user.name, user.photoURL)


                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {

                        navigate(from, { replace: true });
                        console.log(data)
                        if (data.insertedId) {
                            navigate(from, { replace: true });
                            toast('user has been created successfully')

                        }
                    })
            })
            .catch((err) => {
                setLoading(false);
                console.log(err.message);

            });
    };
    return (
        <div>
        <div className="divider">or</div>
        <div className="flex justify-center items-center gap-2">
        <p className=" text-gray-500 mt-5">Login With </p>
        <div className="mt-0 flex justify-center items-center ">


            <div className="flex items-center">
                <button onClick={handleGoogleSignIn} className="btn -mb-5 hover:text-[#84558d] hover:bg-white bg-[#84558d] text-white btn-sm btn-circle btn-outline"><FaGoogle></FaGoogle></button>
                <span className="mt-7 text-lg text-color-one font-semibold mb-2">
                    OOGLE
                </span>
                <span className="mx-2 -mb-5"> </span>
                {/* <button onClick={handleGithubSignIn} className="btn -mb-5 text-red-950 hover:bg-red-950 hover:text-white btn-sm btn-circle btn-outline"><FaGoogle></FaGoogle></button> */}
                {/* <span className="mt-7 text-lg text-color-one font-semibold mb-2">
                    ITHUB
                </span> */}
            </div>
        </div>
        
        </div>
    </div>
    );
};

export default SocialLogin;