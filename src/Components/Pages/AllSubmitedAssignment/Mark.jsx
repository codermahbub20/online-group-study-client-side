import { useLoaderData } from "react-router-dom";


const Mark = () => {

    const submitData = useLoaderData();
    console.log(submitData)

    const {pdf} = submitData;

    return (
        <div className="w-1/2 mx-auto p-5 rounded-lg shadow-lg">
            <div className="md:w-1/2 mx-auto rounded-lg shadow-lg border p-5">
                <form className="card-body">
                    <h1>PDF Link: <a href=""></a></h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Mark;