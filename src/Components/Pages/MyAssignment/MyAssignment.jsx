import { useEffect, useState } from "react";
import MyAssignmentCard from "./MyAssignmentCard";


const MyAssignment = () => {

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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 p-5 px-5">
            {
                    allData
                    ?.filter((item) => item.status === 'submitted')
                    ?.map(submit => <MyAssignmentCard  submit={submit} key={submit._id}></MyAssignmentCard>)
                }
            </div>
        </div>
    );
};

export default MyAssignment;