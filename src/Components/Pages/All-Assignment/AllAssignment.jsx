import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";


const AllAssignment = () => {

    const [assignmentData, setAssignmentData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/createAssignment')
            .then(res => res.json())
            .then(data => {
                setAssignmentData(data)
            })
    }, [])

    return (
        <div>
            <div className="w-11/12 mt-3 rounded-lg mx-auto">
                <div className="hero min-h-[30vh] rounded-lg" style={{ backgroundImage: 'url(https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/banner-3.jpg)' }}>
                    <div className="hero-overlay rounded-lg bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="text-2xl md:text-5xl font-medium">All Assignment Data</h1>

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto">
                {
                    assignmentData.map(card => <AssignmentCard card={card} key={card._id}></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default AllAssignment;