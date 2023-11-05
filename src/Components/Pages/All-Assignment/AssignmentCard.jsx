import { Link } from 'react-router-dom';

const AssignmentCard = ({ card }) => {

    const { photo, mark, title, level,_id } = card;

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img  src={photo} alt="Shoes" className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body items-center ">
                    <h2 className="text-xl">Title: {title}</h2>
                    <p className="text-xl"> Assignment Marks: {mark}</p>
                    <div className="card-actions sm:items-center">

                        <Link to={`/viewassignment/${_id}`}><button className="btn btn-sm hover:bg-[#FF3811] hover:text-white bg-[#FF3811] text-white">View Assignment</button></Link>

                        <Link to={`/updateassignment/${_id}`}><button className="btn btn-sm hover:bg-[#FF3811] hover:text-white bg-[#FF3811] text-white">Update Assignment</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;