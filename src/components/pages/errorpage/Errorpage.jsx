import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import errorLottie from '../../../assets/lottie/Animation - 1699125452085.json'


const Errorpage = () => {
    return (
        <div className="w-full text-center h-screen">
            <Lottie className="mx-auto w-1/2 h-[70%]" animationData={errorLottie} loop={true}></Lottie>
            <Link to='/'><button className='bg-black rounded-md text-white px-1 py-2 '>Back to Home</button></Link>
        </div>
    );
};

export default Errorpage;