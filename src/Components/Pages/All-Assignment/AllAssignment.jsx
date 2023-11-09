import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import { useLoaderData } from "react-router-dom";

import errror from '../../../assets/Animation - 1699524247614.json'
import Lottie from "lottie-react";

const AllAssignment = () => {

    const [assignmentData, setAssignmentData] = useState([]);
    
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);

    const [searchData, setSearchData] = useState([])
    const [loading, setIsLoading] = useState(false)

    const { count } = useLoaderData();
    // console.log(count)

    const numberOfPage = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPage).keys()];

    const handleItemsPerPage = e => {
        console.log(e.target.value)
        const value = parseInt(e.target.value)
        setItemsPerPage(value);
        setCurrentPage(0);
    }
    console.log(itemsPerPage)
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages?.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }


    const handleSearch = (e) => {
        e.preventDefault();
            setIsLoading(true);
        setTimeout(() => {
            const level = e.target.level.value.toLowerCase();
            let filteredAssignments = [];

            if (level === 'all') {
                filteredAssignments = assignmentData;
            } else {
                filteredAssignments = assignmentData.filter(
                    (assignment) => assignment.level.toLowerCase() === level
                );
            }

            setSearchData(filteredAssignments);
            setIsLoading(false)

        }, 1500);
    };


    useEffect(() => {
        fetch(`https://online-group-study-server-two.vercel.app/createAssignment?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setAssignmentData(data)
            })
    }, [currentPage, itemsPerPage])

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

            <div className='w-[400px] mx-auto mt-5'>
                <form onSubmit={handleSearch} className="flex justify-center mb-4">
                    <select
                        name="level"
                        className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
                    >
                        <option value="all">All</option>
                        <option value="easy">easy</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                    </select>
                    <input
                        className="bg-[#FF3811] ml-1 p-[13px] rounded-lg text-base font-semibold text-white"
                        type="submit"
                        value="Search"
                    />
                </form>
            </div>

            <div className="w-5/6 p-5 mx-auto gap-5 grid md:grid-cols-2 lg:grid-cols-3">
                {
                    
                    loading ? (
                        <Lottie animationData={errror}></Lottie>
                      ) : (
                        (searchData.length > 0 ? searchData : assignmentData).map((assignment, index) => (
                          <AssignmentCard key={index} assignmentData={assignmentData} setAssignmentData={setAssignmentData} card={assignment}></AssignmentCard>
                        ))
                      )

                }
            </div>

            <div className="w-1/2 gap-2 mx-auto text-center">
                <button onClick={handlePrevPage} className="btn btn-sm">Prev</button>
                {
                    pages.map(page => <button
                        className={currentPage === page ? 'bg-[#FF3811] text-white hover:bg-[#FF3811] btn ml-2  mb-4' : "btn ml-2  mb-4"}
                        onClick={() => setCurrentPage(page)}
                        key={page}>{page}</button>)
                }
                <button onClick={handleNextPage} className="btn ml-1 btn-sm">Next</button>

                <select value={itemsPerPage} onChange={handleItemsPerPage} className="btn btn-sm ml-4" name="" id="">
                    <option value="2">2</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                </select>

            </div>

        </div>
    );
};

export default AllAssignment;