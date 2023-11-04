import { Link } from 'react-router-dom';

const Navbar = () => {


    const navlinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">All Assignment</Link></li>
        <li><Link>Log in</Link></li>
        <li><Link>Registration</Link></li>
    </>

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
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;