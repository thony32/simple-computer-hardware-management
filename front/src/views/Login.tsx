import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
    const refUsername = useRef() as any;
    const refPassword = useRef() as any;
    const navigate = useNavigate();

    const handleLogin = () => {
        const username = refUsername.current.value;
        const password = refPassword.current.value;

        if (username === "admin" && password === "admin") {
            navigate("/admin");
        } else {
            toast.error("Login failed! Wrong username or password");
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
                theme="light"
            />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <h1 className="text-center font-bold text-2xl">
                                {" "}
                                SIGN IN AS ADMINISTRATOR!
                            </h1>
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="input input-bordered"
                                ref={refUsername}
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
                                ref={refPassword}
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
                            <button
                                className="btn btn-primary w-2/3"
                                onClick={handleLogin}
                            >
                                Sign In
                            </button>
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
