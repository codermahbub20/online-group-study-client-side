import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import SubBanner from "../../Shared/Sub-Banner/SubBanner";



const Registration = () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const notify = () => toast("Registration Successful!");
    const notify1 = () => toast('Password should be at 6 characters or longer');
    const notify2 = () => toast('your Password should have at one upper case latter');
    const notify3 = () => toast('your Password should have at one special characters');

    const { createUser } = useContext(AuthContext)
    // const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if(password.length < 6){
            notify1();
            return;
        }else if(!/[A-Z]/.test(password)){
            notify2();
            return;
        }else if(!/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/.test(password)){
            notify3();
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result)

                updateProfile(result.user,{
                    displayName: name,
                    photoURL: photo
                })
                .then(()=>console.log('Profile Updated'))
                .catch(error =>{
                    console.log(error)
                })
                
            })
            .catch(error => {
                console.log(error)
            })
            notify()

        console.log(name, email, password)

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
            <SubBanner></SubBanner>
            <div className="md:w-1/2 mx-auto mt-5 bg-white shadow-2xl rounded-lg p-5">
                <h1 className="text-2xl text-center font-medium">Registration Now</h1>
                <div className="lg:w-3/4 mx-auto">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
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
                            <button className="btn hover:bg-[#FF3811] hover:text-white text-white bg-[#FF3811]">Register</button>
                        </div>
                        <div className="form-control w-1/2">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-sm hover:text-white   btn-ghost">Google <FcGoogle className="w-8 h-5"></FcGoogle></button>
                        </div>
                        <p className="text-xl">Already you have an account? <a className="text-[#FF3811]" href="/login">Login Now</a> </p>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;