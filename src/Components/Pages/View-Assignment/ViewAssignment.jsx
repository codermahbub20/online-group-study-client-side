import { Link, useLoaderData } from "react-router-dom";

const ViewAssignment = () => {

    const viewData = useLoaderData()

    console.log(viewData)
    const { photo, title, description, level, mark, email, _id } = viewData;
    return (
        <div>
            <div className="w-11/12 mx-auto p-3">
                <div className="hero min-h-[30vh] rounded-lg" style={{ backgroundImage: 'url(https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/banner-3.jpg)' }}>
                    <div className="hero-overlay rounded-lg bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                            <h1 className="text-2xl md:text-5xl font-medium">View Assignment Details</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-11/12 p-3 mx-auto">
                <div className="hero min-h-[60vh] bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={photo} className="lg:max-w-xl rounded-lg shadow-2xl" />
                        <div >
                            <h1 className="text-3xl font-bold">Title: {title}</h1>
                            <h2 className="text-xl mt-2">Created By: {email}</h2>
                            <p className="md:text-xl py-1">Dificulty Level:   {level}</p>
                            <p className="md:text-xl py-1">Assignment Mark:   {mark}</p>
                            <p className="md:text-xl py-2">Description: {description}</p>

                            <Link to={`/takeassignment/${_id}`}>
                                <button className="btn hover:bg-[#FF3811] text-white bg-[#FF3811] mt-2">Take Assignment</button>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ViewAssignment;