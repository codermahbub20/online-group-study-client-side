import { useLoaderData } from "react-router-dom";


const TakeAssignment = () => {

    const specificData = useLoaderData();

    const { title } = specificData;

    return (
        <div className="p-5">


            <div className="w-3/4 py-5 md:flex shadow-lg p-5 mx-auto">
                <div>
                    <img className="w-3/4 h-3/4" src="https://www.virtualmentoring.net/wp-content/uploads/2019/07/submission-pic_orig-e1533631304936.jpg" alt="Album" />
                </div>

                <div>
                    <h1 className="text-2xl">Assignment Title: {title}</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Pdf URL</span>
                            </label>
                            <input type="text" placeholder="enter pdf url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quick Note</span>
                            </label>
                            <input type="text" placeholder="Quick Note" className="input input-bordered" required />
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