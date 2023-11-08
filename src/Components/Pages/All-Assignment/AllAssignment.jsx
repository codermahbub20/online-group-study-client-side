import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import { useLoaderData } from "react-router-dom";


const AllAssignment = () => {

    const [assignmentData, setAssignmentData] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);

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



    useEffect(() => {
        fetch(`http://localhost:5000/createAssignment?page=${currentPage}&size=${itemsPerPage}`)
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

            <div className="w-3/4 mx-auto mt-2 mb-2">
                <select className="select select-bordered w-full mx-auto max-w-xs">
                    <option disabled selected>Sort By Level</option>
                    <option>easy</option>
                    <option>medium</option>
                    <option>hard</option>
                </select>
            </div>

            <div className="w-5/6 p-5 mx-auto gap-5 grid md:grid-cols-2 lg:grid-cols-3">
                {
                    assignmentData?.map(card => <AssignmentCard assignmentData={assignmentData} setAssignmentData={setAssignmentData} card={card} key={card._id}></AssignmentCard>)
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