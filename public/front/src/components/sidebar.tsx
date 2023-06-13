import { Link, Outlet } from "react-router-dom";
import Dashboard from "../admin/Dashboard";
import Login from "../views/Login";

export default function sidebar() {
    return (
        <div className="flex flex-row">
            {/* Sidebar */}
            <div className="hidden md:flex md:fixed">
                <ul className="menu bg-base-200 w-56 rounded-box h-screen flex justify-between">
                    <div className="space-y-8">
                        <li>
                            <Link to="/admin" className="p-8 text-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                                    />
                                </svg>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/products" className="p-8 text-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/sales" className="p-8 text-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                                    />
                                </svg>
                                Sales
                            </Link>
                        </li>

                    </div>

                    <div className="flex flex-col justify-center">
                        <Link
                            to="/login"
                            className="btn bg-red-500 hover:bg-red-800 flex justify-center items-center rounded-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-base-100"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                />
                            </svg>

                            <span className="text-center text-base-100">
                                Sign Out
                            </span>
                        </Link>
                    </div>
                </ul>
            </div>

            <div className="p-8 md:ml-56 w-screen">
                <Outlet />
            </div>
        </div>
    );
}
