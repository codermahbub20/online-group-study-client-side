import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";


const TakeAssignment = () => {

    const specificData = useLoaderData();
    const { user } = useContext(AuthContext)

    const { title } = specificData;

    const handleAssignmentSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const pdf = form.pdf.value;
        const note = form.note.value;
        const mark = form.mark.value;
        const status = form.status.value;
        const email = user.email;
        const submitedData = { note, pdf, mark, email, name, title,status }

        console.log(submitedData);

        fetch("https://online-group-study-server-two.vercel.app/submittedData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submitedData),
        })
            .then(res => res.json())
            .catch(error => {
                console.log(error)
            })

        form.reset()
    }

    return (
        <div className="p-5">


            <div className="w-3/4 py-5 md:flex shadow-lg p-5 mx-auto">
                <div>
                    <img className="w-3/4 h-3/4" src="https://www.virtualmentoring.net/wp-content/uploads/2019/07/submission-pic_orig-e1533631304936.jpg" alt="Album" />
                </div>

                <div>
                    <h1 className="text-2xl">Assignment Title: {title}</h1>
                    <form onSubmit={handleAssignmentSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Examinee Name</span>
                            </label>
                            <input type="text" name="name" placeholder="examinee Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Pdf URL</span>
                            </label>
                            <input type="text" name="pdf" placeholder="enter pdf url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quick Note</span>
                            </label>
                            <input type="text" name="note" placeholder="Quick Note" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Assignment Marks</span>
                            </label>
                            <input type="text" name="mark" defaultValue={50} placeholder="Quick Note" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <select name="status" className="select select-bordered w-full max-w-xs">
                                
                                <option>pending</option>
                            </select>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white hover:bg-[#FF3811]">Submit Assignment</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default TakeAssignment;
<img className="w-3/4 h-3/4" src="https://www.virtualmentoring.net/wp-content/uploads/2019/07/submission-pic_orig-e1533631304936.jpg" alt="Album" />