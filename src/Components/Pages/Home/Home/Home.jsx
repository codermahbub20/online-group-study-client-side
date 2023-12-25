import Banner from "../Banner/Banner";
import Course from "../Course/Course";
import Features from "../Features/Features";
import Faqs from "../Frequently-Ask-And-Question/Faqs";
import LatestClass from "../LatestClass/LatestClass";
import SpeechComponent from "../SpechComponent/SpechComponent";

const Home = () => {

  

  

    return (
        <div>
            
            <div className="w-11/12 mx-auto mt-4">
                <Banner></Banner>
            </div>
            <div className="mt-5">
                <Features></Features>
            </div>
            <LatestClass></LatestClass>
            <div className="w-3/4 mx-auto  p-5 mb-0">
                <Faqs></Faqs>
            </div>
            <Course></Course>
            <SpeechComponent></SpeechComponent>
        </div>
    );
};

export default Home;