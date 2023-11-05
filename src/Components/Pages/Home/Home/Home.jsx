import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Faqs from "../Frequently-Ask-And-Question/Faqs";

const Home = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto mt-4">
                <Banner></Banner>
            </div>
            <div className="mt-5">
                <Features></Features>
            </div>
            <div className="w-3/4 mx-auto  p-5">
                <Faqs></Faqs>
            </div>
        </div>
    );
};

export default Home;