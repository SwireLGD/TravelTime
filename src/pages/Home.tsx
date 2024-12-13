import Baikal from "../features/Baikal/Baikal";
import Programm from "../features/Programm/Programm";
import RouteBlock from "../features/Route/Route";
import TravelTime from "../features/TravelTime/TravelTime";
import WhyUs from "../features/WhyUs/WhyUs";
import Tours from "../features/Tours/Tours";
import Reviews from "../features/Reviews/Reviews";
import Request from "../features/Request/Request";

const Home = () => {

    return (
        <>
            <TravelTime />
            <WhyUs />
            <Baikal />
            <RouteBlock />
            <Programm />
            <Reviews />
            <Tours />
            <Request />
        </>
    );
};

export default Home;