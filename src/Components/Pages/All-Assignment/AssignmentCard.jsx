import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const AssignmentCard = ({ card, assignmentData, setAssignmentData }) => {

    const { photo, mark, title, level, _id,email } = card;
    // console.log(email)
    const {user} = useContext(AuthContext);
    // console.log(user.email)
    
        const handleClickToDelete = _id => {
        if(user.email === email){

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be delete your assignment item this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
            .then((result) => {
                if (result.isConfirmed) {
    
                    fetch(`https://online-group-study-server-two.vercel.app/createAssignment/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if ( data.deletedCount > 0 ) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your  Assignment has Been Removed.',
                                    'success'
                                )
                                const remaining = assignmentData.filter(data => data._id !== _id)
                                setAssignmentData(remaining)
                            }
                        })
                }
            })
        }
        else{
            Swal.fire(
                'Error!',
                'You can not  Removed this.',
                'error'
            )
        }
    
    }

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body items-center ">
                    <h2 className="text-xl">Title: {title}</h2>
                    <h2 className="text-xl">Level: {level}</h2>
                    <h2 className="text-xl">Author: {email}</h2>
                    <p className="text-xl"> Assignment Marks: {mark}</p>
                    <div className="card-actions sm:items-center">

                        <Link to={`/viewassignment/${_id}`}><button className="btn btn-sm hover:bg-[#FF3811] hover:text-white bg-[#FF3811] text-white">View Assignment</button></Link>

                        <Link to={`/updateassignment/${_id}`}><button className="btn btn-sm hover:bg-[#FF3811] hover:text-white bg-[#FF3811] text-white">Update Assignment</button></Link>

                    </div>
                    <button onClick={() => handleClickToDelete(_id)} className='btn btn-sm hover:bg-[#FF3811] hover:text-white bg-[#FF3811] text-white'><MdDelete className='w-5 h-5'></MdDelete></button>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;