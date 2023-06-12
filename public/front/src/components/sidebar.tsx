import { Link, Outlet } from "react-router-dom";
import Dashboard from "../admin/Dashboard";
import Login from "../views/Login";

export default function sidebar() {
    return (
        <div className="lg:flex lg:flex-row">
            {/* Sidebar */}
            <div className="hidden md:flex md:fixed">
                <ul className="menu bg-base-200 w-56 rounded-box h-screen flex justify-between">
                    <div>
                        <li>
                            <a>Dashboard</a>
                        </li>
                        <li>
                            <a>Products</a>
                            <ul>
                                <li>
                                    <Link to="printers">Printers</Link>
                                </li>
                                <li>
                                    <Link to="computers">Computers</Link>
                                </li>
                                <li>
                                    <Link to="networks">Networks</Link>
                                </li>
                                <li>
                                    <Link to="others">Others</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Sales</a>
                        </li>
                        <li>
                            <a>Billing</a>
                        </li>
                        <li>
                            <a>Invoice</a>
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

            <div className="p-8 md:ml-60">
                <Outlet />
            </div>
        </div>
    );
}
