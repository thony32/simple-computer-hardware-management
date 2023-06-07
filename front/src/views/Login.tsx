import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <h1 className="text-center font-bold text-2xl"> SIGN IN!</h1>
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="flex justify-between mt-6 space-x-2">
                            <Link to="/admin" className="btn btn-primary w-1/2">
                                Sign In
                            </Link>
                            <Link to="/" className="btn ">
                                Cancel
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
