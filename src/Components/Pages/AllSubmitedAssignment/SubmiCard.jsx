import { Link } from "react-router-dom";
import Mark from "./Mark";


const SubmiCard = ({ submit }) => {


    const { title, name, mark, _id, status, examinee, author } = submit;

    return (
        <div className="w-3/4 mx-auto">
            {
                status === 'pending' ?

                    <div className="card p-5 w-full h-[250px] bg-base-100 py-2 border  shadow-xl">
                        <figure><h1 className="text-xl">Title: {title}</h1></figure>
                        <div className=" text-center ">
                            <h2 className=" text-lg">Examinee Name: {name}</h2>
                            <h2 className=" text-lg">Submitted By: {examinee}</h2>
                            <p className="text-lg">Assignment Mark: {mark}</p>
                            <p className="text-lg">Author: {author}</p>
                            <p className="text-lg">Assignment Status: <span className="text-blue-700">{status}</span></p>
                            <div className="card-actions justify-center">
                                <Link to={`/giveMark/${_id}`}>
                                    <button className="btn text-white hover:bg-[#FF3811] bg-[#FF3811]">Give Mark</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    : <></>
            }
        </div>
    );
};



export default SubmiCard;