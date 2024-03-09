import Details from "../Details/Details";
import Hero from "../Navbar/Hero";
import OverView from "../OverView/OverView";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <OverView></OverView>
            <Details></Details>
        </div>
    );
};

export default Home;