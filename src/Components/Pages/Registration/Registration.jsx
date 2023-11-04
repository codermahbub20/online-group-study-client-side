import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";




const Registration = () => {

    const notify = () => toast("Registration Successful!");
    const notify1 = () => toast('Password should be at 6 characters or longer');
    const notify2 = () => toast('your Password should have at one upper case latter');
    const notify3 = () => toast('your Password should have at one special characters');

    const {createUser} = useContext(AuthContext)
    // const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const registerUser = { name, photo, email, password }

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


        console.log(registerUser)

        createUser(email, password)
            .then(res => {
                console.log(res);
                updateProfile(res.user,{
                    displayName: name,
                    photoURL: photo
                })
            })
            .catch(error =>{
                console.log(error)
            })

            notify()
        form.reset()
    }


    return (
        <div className="p-5 ">
            <div className="hero min-h-[30vh] rounded-lg" style={{ backgroundImage: 'url(https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/banner-3.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-2xl md:text-5xl font-medium">Student Registration</h1>

                    </div>
                </div>
            </div>

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
                            <input type="text" name="photo" placeholder="email" className="input input-bordered" required />
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
                        <p className="text-xl">Already you have an account? <a className="text-[#FF3811]" href="/login">Login Now</a> </p>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;