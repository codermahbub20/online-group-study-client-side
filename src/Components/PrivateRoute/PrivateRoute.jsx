import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-ring loading-lg"></span>;
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default PrivateRoute;