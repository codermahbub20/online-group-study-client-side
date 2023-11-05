import { useEffect, useState } from "react";
import Feature from "./Feature";


const Features = () => {

    const [features, setFeatures] = useState([])
    useEffect(()=>{
        fetch('features.json')
        .then(res => res.json())
        .then(data =>{
            setFeatures(data.features)
        })
    },[])

    return (
        <div>
            <div className="w-3/4 mt-4 mx-auto">
                <h1 className="text-2xl text-center text-[#FF3811]">FEATURES</h1>
                <h1 className="text-4xl text-center mt-3 font-bold">The Main Feature of Online Group Study</h1>
            </div>

            <div className="w-3/4 mx-auto gap-5 mt-5 grid md:grid-cols-2 lg:grid-cols-3">
                {
                    features?.map(feature =><Feature key={feature.id} feature={feature}></Feature>)
                }
            </div>
        </div>
    );
};

export default Features;