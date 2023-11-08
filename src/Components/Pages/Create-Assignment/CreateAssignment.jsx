import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());

    const {user} = useContext(AuthContext)

    const handleCreateAssignment = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const mark = form.mark.value;
        const photo = form.photo.value;
        const level = form.level.value;
        const date = form.date.value;
        const email = user.email;
        const assignmentInfo = { title, description, mark, photo, level, date,email }

        console.log(assignmentInfo)

        axios.post('https://online-group-study-server-two.vercel.app/createAssignment',assignmentInfo)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Assignment create Successfully Done !!',
                    icon: 'success',
                    confirmButtonText: 'Great'
                  })
            }
        })
        .catch(error =>{
            console.log(error)
        })

        form.reset()
    }



    return (
        <div>
            <div className="p-5 rounded-lg">
                <div className="hero min-h-[30vh]  rounded-lg" style={{ backgroundImage: 'url(https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/banner-3.jpg)' }}>
                    <div className="hero-overlay rounded-lg bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="text-2xl md:text-5xl font-medium">Create Assignment</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-3/4 mx-auto p-5 mb-5">
                <h1 className="text-3xl text-center font-medium mb-3">Enter Create A Assignment</h1>
                <hr />
                <form onSubmit={handleCreateAssignment}>
                    <div className='lg:flex md:px-24'>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text  text-xl">Assignment Title</span>
                            </label>
                            <input type="text" placeholder="Assignment Title" className="input input-bordered" name='title' required />

                        </div>
                        <div className="form-control lg:ml-4 lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl">Assignment Description</span>
                            </label>
                            <input type="text" placeholder="Assignment Description" className="input input-bordered" name='description' required />
                        </div>
                    </div>


                    <div className='lg:flex md:px-24'>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl">Assignment Marks</span>
                            </label>
                            <input type="number" defaultValue={50} placeholder="Assignment Marks" className="input input-bordered" name='mark' required />

                        </div>
                        <div className="form-control lg:ml-4 lg:w-1/2">
                            <label className="label">
                                <span className="label-text   text-xl">Thumbnail Img Url</span>
                            </label>
                            <input type="text" placeholder="Thumbnail Img Url" className="input input-bordered" name='photo' required />
                        </div>
                    </div>
                    <div className='lg:flex md:px-24'>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text  text-xl">Assignment Level</span>
                            </label>
                            <select name="level" className="select text-xl select-ghost w-full  input  input-bordered">
                                <option disabled selected>Enter Your Assignment Level</option>
                                <option>easy</option>
                                <option>medium</option>
                                <option>hard</option>
                            </select>

                        </div>
                        <div className="form-control lg:ml-4 lg:w-1/2">
                            <label className="label">
                                <span className="label-text   text-xl">Assignment Due Date</span>
                            </label>
                            <DatePicker name="date" className="input w-full input-bordered" selected={startDate} onChange={(date) => setStartDate(date)} />

                        </div>
                    </div>
                    <div className="form-control md:px-24  w-full">
                        <input className='btn mt-3 w-full mx-auto border-2 border-white text-white hover:bg-[#FF3811] bg-[#FF3811]' type="submit" value="Create Assignment" />
                    </div>

                </form>

            </div>
        </div>
    );
};

export default CreateAssignment;