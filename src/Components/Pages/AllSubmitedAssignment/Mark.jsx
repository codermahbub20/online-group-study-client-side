import { useLoaderData } from "react-router-dom";


const Mark = () => {

    const submitData = useLoaderData();
    console.log(submitData)

    const { pdf, name, email, status, title } = submitData;

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
                    <form >
                        <select name="status" className="select w-3/4 select-bordered  max-w-xs">
                            <option>submitted</option>
                        </select>
                        <div className="form-control w-3/4">
                            <label className="label">
                                <span className="label-text text-lg">Assignment Marks Out Of 60</span>
                            </label>
                            <input type="email" name="mark" placeholder="marks" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-3/4">
                            <label className="label">
                                <span className="label-text text-lg">Assignment Feedback</span>
                            </label>
                            <textarea name="feedback" className="textarea textarea-accent" placeholder="Assignment Feedback"></textarea>
                        </div>
                        <button className="btn text-white mt-2 bg-[#FF3811] hover:bg-[#FF3811]">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Mark;