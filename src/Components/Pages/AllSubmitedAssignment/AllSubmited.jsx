import { useEffect, useState } from "react";
import SubmiCard from "./SubmiCard";


const AllSubmited = () => {

    const [allData,setAllData] = useState([])
  
    useEffect(()=>{
        fetch('https://online-group-study-server-two.vercel.app/submittedData')
        .then(res =>res.json())
        .then(data =>{
            setAllData(data)
        })
    },[])

    return (
        <div>
             {/* {loadeddata
          .filter((item) => item.type === 'pending')
          .map((item, index) => */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 p-5 px-5">
                {
                    allData
                    .filter((item) => item.status === 'pending')
                    .map(submit => <SubmiCard  submit={submit} key={submit._id}></SubmiCard>)
                }
            </div>
        </div>
    );
};

export default AllSubmited;