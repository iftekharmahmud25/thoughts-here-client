import { Link } from "react-router-dom";


const HeroSection = () => {
    return (
        <div className="hero  min-h-screen hero-bg">
            <div className="hero-content flex-col  lg:flex-row-reverse">
                <img src="https://i.ibb.co/sH223H4/images-q-tbn-ANd9-Gc-Sj-Yu9sn-RVRhr-LMu-CGxpnh-QOynw-FNg210h6v-Q-usqp-CAU.jpg" className="md:w-[500px] hidden lg:block md:h-[300px] rounded-sm shadow-2xl" />
                <div>
                    <div className="md:me-20">
                        <h1 className="text-5xl font-bold mb-5">Write and Glow!</h1>
                        <div className="flex pt-4 items-center gap-4">
                            <Link>
                                <button className="btn bg-[#f0ebe3] text-black rounded-sm shadow-xl">Get Started</button>
                            </Link>
                            <div>
                                <p>Journey through Thoughtful Articles</p>
                                <p>Discover Insights and Inspiration</p>

                            </div>
                            <div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;