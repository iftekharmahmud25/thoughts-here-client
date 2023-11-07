import FaqSection from "../others/FaqSection/FaqSection";
import HeroSection from "../others/HeroSection/HeroSection";
import NewsSletter from "../others/NewsSletter/NewsSletter";
import RecentBlogs from "../others/RecentBlogs/RecentBlogs";



const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <RecentBlogs></RecentBlogs>
            <FaqSection></FaqSection>
            <NewsSletter></NewsSletter>
        </div>
    );
};

export default Home;