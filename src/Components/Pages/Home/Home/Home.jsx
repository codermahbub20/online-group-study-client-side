import Banner from "../Banner/Banner";
import Faqs from "../Frequently-Ask-And-Question/Faqs";

const Home = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto mt-4">
                <Banner></Banner>
            </div>
            <div className="w-11/12 mx-auto p-5">
            <Faqs></Faqs>
            </div>
        </div>
    );
};

export default Home;