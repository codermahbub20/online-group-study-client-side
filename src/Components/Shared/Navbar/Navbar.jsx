import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allassignment">All Assignment</NavLink></li>
        <li><NavLink to="/createassignment">Create Assignment</NavLink></li>
        <li><NavLink to="/allSubmitted">All Submited Assignment</NavLink></li>
        <li><NavLink to="/login">Log in</NavLink></li>
        <li><NavLink to="/registration">Registration</NavLink></li>
    </>


    const handleLogout = () => {
        logOut()
            .then(res => {
                console.log("Logged out", res);
            })
            .catch(err => {
                console.log("Error logging out", err);
            });
    };

    return (
        <div className="navbar md:px-10 bg-white shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm text-lx dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a ><img className="w-1/2 " src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/06/logo.png" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-lg px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <>
                        <div className="image-container mr-3"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>

                            <img className={hovered ? 'image-hovered rounded-full w-16'  : 'image-normal w-16 rounded-full'} src={user.photoURL} alt="" />
                            {hovered && <div className="text-overlay">{user.displayName}</div>}
                        </div>
                        <button onClick={handleLogout} className="btn hover:bg-[#FF3811] bg-[#FF3811] text-white">Log Out</button>
                    </>
                ) : (
                    <NavLink to="/login"><button className="btn bg-[#FF3811] text-white">Login</button></NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;