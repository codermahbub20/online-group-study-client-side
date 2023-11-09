import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyAssignmentCard = ({ submit }) => {

    const { title, name, mark, _id, status, examinee } = submit;

    const {user} = useContext(AuthContext);

    return (
       <div>
            {
                user?.email === examinee ?  <div className="w-3/4 mx-auto">
                <div className="card p-5 w-full h-[250px] bg-base-100 py-3 border  shadow-xl">
                    <figure><h1 className="text-xl">Title: {title}</h1></figure>
                    <div className=" text-center space-y-3">
                        <h2 className=" text-lg">Examinee Name: {name}</h2>
                        <h2 className=" text-lg">Submitted By: {examinee}</h2>
                        <p className="text-lg">Assignment Mark: {mark}</p>
                        <p className="text-lg">Assignment Status: <span className="text-blue-700">{status}</span></p>
                    </div>
                </div>
            </div> :
            <></>
            }
       </div>
    );
};

export default MyAssignmentCard;



