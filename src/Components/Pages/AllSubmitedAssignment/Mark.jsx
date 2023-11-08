import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Mark = () => {

    const submitData = useLoaderData();
    console.log(submitData)

    const { pdf, name, email, status, title, _id } = submitData;

    const handleSubmitted = e => {

        e.preventDefault();
        const form = e.target;

        const status = form.status.value;
        const mark = form.mark.value;
        const feedback = form.note.value;

        console.log(status, mark, feedback)

        const assignmentInfo = { status, feedback, mark }

        console.log(assignmentInfo)

        axios.put(`http://localhost:5000/submittedData/${_id}`, assignmentInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment submitted Done !!',
                        icon: 'success',
                        confirmButtonText: 'Great'
                    })
                }

            })
            .catch(error => {
                console.log(error)
            })


    }

    return (
        <div className="w-3/4 mx-auto p-5 rounded-lg shadow-lg">
            <div className="py-5 gap-5 grid lg:grid-cols-2">
                <div >
                    <img src="https://media.licdn.com/dms/image/D4E12AQFwpqL0XsENzQ/article-cover_image-shrink_720_1280/0/1677753194098?e=2147483647&v=beta&t=er-_8BrpdPXlBg5dBJae5hu9sOSbmwRyNLzjwWnAifQ" alt="" />
                </div>

                <div className="text-xl space-y-3">
                    <h1>Examinee Name : {name}</h1>
                    <h1>Author Email  : {email}</h1>
                    <h1>Assignment Title : {title}</h1>

                    <form onSubmit={handleSubmitted}>
                        <select name="status" className="select w-3/4 select-bordered  max-w-xs">
                            <option>submitted</option>
                        </select>
                        <div className="form-control w-3/4">
                            <label className="label">
                                <span className="label-text text-lg">Assignment Marks Out Of 60</span>
                            </label>
                            <input type="text" name="mark" placeholder="marks" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-3/4">
                            <label className="label">
                                <span className="label-text text-lg">Assignment Feedback</span>
                            </label>
                            <textarea name="note" className="textarea textarea-accent" placeholder="Assignment Feedback"></textarea>
                        </div>
                        <button className="btn text-white mt-2 bg-[#FF3811] hover:bg-[#FF3811]">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Mark;