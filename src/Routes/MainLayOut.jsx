import { Outlet } from "react-router-dom";


const MainLayOut = () => {
    return (
        <div>
            <h1>Hello World . The Client side server is running</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;