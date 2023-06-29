import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AdminLogo from "../assets/AdminLogo";

export default function UserLogin() {
    const refUsername = useRef() as any;
    const refPassword = useRef() as any;
    const navigate = useNavigate();

    const handleLogin = () => {
        const username = refUsername.current.value;
        const password = refPassword.current.value;

        if (username === "" || password === "") {
            toast.error("Login failed! The two fields are mandatory");
        }
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="hero-content flex-col lg:flex-row-reverse w-screen ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <h1 className="text-center font-bold text-2xl">
                                {" "}
                                SIGN IN HERE!
                            </h1>
                            <label className="label">
                                <span className="label-text">
                                    Username
                                    <span className="text-red-500">*</span>
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="input input-bordered"
                                ref={refUsername}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Password
                                    <span className="text-red-500">*</span>
                                </span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered"
                                ref={refPassword}
                                required
                            />
                            <label className="label">
                                <a className="label-text-alt link link-hover text-blue-400">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between mt-2 space-x-2">
                                <button
                                    className="btn bg-[#0079C1] w-1/2 text-white hover:bg-[#0062a3]"
                                    onClick={handleLogin}
                                >
                                    Sign In
                                </button>
                                <Link
                                    to="/adminlogin"
                                    className="btn btn-neutral text-base-200"
                                >
                                    <AdminLogo />
                                    Admin
                                </Link>
                            </div>
                            <div className="flex justify-between flex-wrap mt-2 space-x-2">
                                <Link to="/register"
                                    className="btn btn-primary w-1/2 text-base-200"
                                >
                                    Sign Up
                                </Link>
                                <Link to="/" className="btn ">
                                    Back to home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
