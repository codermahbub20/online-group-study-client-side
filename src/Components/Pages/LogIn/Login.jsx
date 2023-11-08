import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const [loginError, setLogInError] = useState('');

    const location = useLocation()
    const navigate = useNavigate()

    const { logIn } = useContext(AuthContext)

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)

        logIn(email, password)
            .then(res => {
                console.log(res)
                
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.log(error)
                setLogInError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="p-5 ">
            <div className="hero min-h-[30vh] rounded-lg" style={{ backgroundImage: 'url(https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/banner-3.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-2xl md:text-5xl font-medium">Student Login</h1>

                    </div>
                </div>
            </div>

            <div className="md:w-1/2 mx-auto mt-5 bg-white shadow-2xl rounded-lg p-5">
                <h1 className="text-2xl text-center font-medium">Login Now</h1>
                <div className="lg:w-3/4 mx-auto">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn hover:bg-[#FF3811] hover:text-white text-white bg-[#FF3811]">Login</button>
                        </div>
                        <div className="form-control w-1/2">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-sm hover:text-white   btn-ghost">Google <FcGoogle className="w-8 h-5"></FcGoogle></button>
                        </div>
                        <p className="text-xl">Do not have an account? <a className="text-[#FF3811]" href="/registration">Register Now</a> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;