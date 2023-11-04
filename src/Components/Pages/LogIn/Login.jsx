

const Login = () => {


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const registerUser = { name, photo, email, password }

        console.log(registerUser)

        form.reset()
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;