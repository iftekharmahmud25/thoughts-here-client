import { Link } from "react-router-dom";


const HeroSection = () => {
    return (
        <div className="hero  min-h-screen hero-bg">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20 max-w-5xl mx-auto">
                <img src="https://i.ibb.co/sH223H4/images-q-tbn-ANd9-Gc-Sj-Yu9sn-RVRhr-LMu-CGxpnh-QOynw-FNg210h6v-Q-usqp-CAU.jpg" className="md:w-[500px] hidden lg:block md:h-[300px] rounded-sm shadow-2xl" />
                <div>
                    <div className="">
                        <h1 className="text-6xl font-bold mb-3 md:mb-10">Write <span className="italic">and</span> Glow!</h1>
                        <div className="block md:hidden">
                        <p>Journey through Thoughtful Articles</p>
                                <p>Discover Insights and Inspiration</p>
                        </div>
                        <div className="flex pt-4 items-center gap-4">
                            <Link>
                                <button className="btn bg-[#f0ebe3] text-black rounded-sm shadow-xl">Get Started</button>
                            </Link>
                            <div className="hidden md:block">
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