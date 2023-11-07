import FaqSection from "../others/FaqSection/FaqSection";
import HeroSection from "../others/HeroSection/HeroSection";
import NewsSletter from "../others/NewsSletter/NewsSletter";
import RecentBlogs from "../others/RecentBlogs/RecentBlogs";
import TopContributors from "../others/topContributors/TopContributors";



const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <RecentBlogs></RecentBlogs>
            <TopContributors></TopContributors>
            <FaqSection></FaqSection>
            <NewsSletter></NewsSletter>
        </div>
    );
};

export default Home;