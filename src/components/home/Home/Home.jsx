import HeroSection from "../others/HeroSection/HeroSection";
import NewsSletter from "../others/NewsSletter/NewsSletter";
import RecentBlogs from "../others/RecentBlogs/RecentBlogs";



const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <RecentBlogs></RecentBlogs>
            <NewsSletter></NewsSletter>
        </div>
    );
};

export default Home;