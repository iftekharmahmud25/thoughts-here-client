import { useState } from 'react';
import './newsSletter.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsSletter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    return (
        <div className="hero h-[200px] bg-emerald-50 my-20" >
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md subscribe-text">
                    <p className="text-3xl font-semibold mb-3 hover:text-[#F39B9B] transition-transform duration-200 ease-in-out hover:scale-110  text-white">Subscribe!!!</p>
                    <form
                        className="flex justify-center gap-3"
                        onSubmit={(e) => {
                            e.preventDefault();
                            setSubscribed(true);
                            toast.success('Thank you for subscribing to our newsletter');
                        }}
                    >
                        <div className="">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-pink-500"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-md bg-[#f0ebe3] text-black"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>


                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default NewsSletter;