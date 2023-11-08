
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-blue-950 text-white">
                <aside>
                    <img className="w-3/4" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/10/logo-white-1.png" alt="" />
                    <p>Online Group study Ltd.<br />Providing reliable tech since 2020</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a href="/createassignment" className="link link-hover">Create Assignment</a>
                    <a href="/allSubmitted" className="link link-hover">All Submitted Assignmnet</a>
                    <a href="login" className="link link-hover">LogIn</a>
                    <a href="registration" className="link link-hover">Registration</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a href="allassignment" className="link link-hover">All Assignment</a>
                    <a href="/updateassignment/:id" className="link link-hover">Update Assignment</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Group Study Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;