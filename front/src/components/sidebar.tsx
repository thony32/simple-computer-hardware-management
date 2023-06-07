import { Link, Outlet } from "react-router-dom";
import Dashboard from "../admin/Dashboard";
import Login from "../views/Login";

export default function sidebar() {
    return (
        <div>
            <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-gray-200   dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-base-200  flex flex-col justify-between">
                    <div className="space-y-8 font-medium">
                        <a className="flex items-center pl-2.5 mb-5">
                            <span className="self-center text-xl font-semibold whitespace-nowrap ">
                                Logo
                            </span>
                        </a>
                        <Link
                            to="dashboard"
                            className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-base-300 "
                        >
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <span className="ml-3">Dashboard</span>
                        </Link>
                    </div>
                    <div>
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
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                <Outlet />
            </div>
        </div>
    );
}
