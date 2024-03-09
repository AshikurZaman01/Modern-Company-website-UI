import Details from "../Details/Details";
import Hero from "../Navbar/Hero";
import OverView from "../OverView/OverView";
import SimpleBanner from "../SimpleBanner/SimpleBanner";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <OverView></OverView>
            <Details></Details>
            <SimpleBanner></SimpleBanner>
        </div>
    );
};

export default Home;