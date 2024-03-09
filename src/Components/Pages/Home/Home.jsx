import Blogs from "../Blogs/Blogs";
import Details from "../Details/Details";
import Footer from "../Footer/Footer";
import Hero from "../Navbar/Hero";
import OverView from "../OverView/OverView";
import SimpleBanner from "../SimpleBanner/SimpleBanner";
import VideoBanner from "../VideoBanner/VideoBanner";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <OverView></OverView>
            <Details></Details>
            <SimpleBanner></SimpleBanner>
            <VideoBanner></VideoBanner>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;