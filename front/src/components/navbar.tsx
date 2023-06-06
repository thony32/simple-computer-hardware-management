import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="">Products</Link>
                            </li>
                        </ul>
                    </div>
                    <Link
                        to="/login"
                        className="btn btn-ghost normal-case text-xl"
                    >
                        daisyUI
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li tabIndex={0}>
                            <Link to="">Products</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-4 navbar-end">
                    <div>
                        {/* You can open the modal using ID.showModal() method */}
                        <button
                            className="btn"
                            onClick={() => window.my_modal_4.showModal()}
                        >
                            open modal
                        </button>
                        <dialog id="my_modal_4" className="modal">
                            <form
                                method="dialog"
                                className="modal-box w-11/12 max-w-5xl"
                            >
                                <h3 className="font-bold text-2xl text-center">
                                    Here is your cart!
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Job</th>
                                                <th>Favorite Color</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* row 1 */}
                                            <tr>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div>
                                                            <div className="font-bold">
                                                                Hart Hagerty
                                                            </div>
                                                            <div className="text-sm opacity-50">
                                                                United States
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Zemlak, Daniel and Leannon
                                                    <br />
                                                    <span className="badge badge-ghost badge-sm">
                                                        Desktop Support
                                                        Technician
                                                    </span>
                                                </td>
                                                <td>Purple</td>
                                                <th>
                                                    {/* Open the modal using ID.showModal() method */}
                                                    <button
                                                        className="btn btn-error"
                                                        onClick={() =>
                                                            window.my_modal_1.showModal()
                                                        }
                                                    >
                                                        Remove
                                                    </button>
                                                    <dialog
                                                        id="my_modal_1"
                                                        className="modal"
                                                    >
                                                        <form
                                                            method="dialog"
                                                            className="modal-box space-y-8"
                                                        >
                                                            <h3 className="font-bold text-2xl text-center">
                                                                Are you sure to remove this item from the cart?
                                                            </h3>
                                                            <div className="flex justify-center gap-4">
                                                                <button className="btn btn-primary">Yes</button>
                                                                <button className="btn">No</button>
                                                            </div>
                                                            <div className="modal-action">
                                                                {/* if there is a button in form, it will close the modal */}
                                                                <button className="btn btn-neutral">
                                                                    Close
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </dialog>
                                                </th>
                                            </tr>
                                            {/* row 2 */}
                                            <tr>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div>
                                                            <div className="font-bold">
                                                                Brice Swyre
                                                            </div>
                                                            <div className="text-sm opacity-50">
                                                                China
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Carroll Group
                                                    <br />
                                                    <span className="badge badge-ghost badge-sm">
                                                        Tax Accountant
                                                    </span>
                                                </td>
                                                <td>Red</td>
                                                <th>
                                                    <button className="btn btn-ghost btn-xs">
                                                        details
                                                    </button>
                                                </th>
                                            </tr>
                                            {/* row 3 */}
                                            <tr>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div>
                                                            <div className="font-bold">
                                                                Marjy Ferencz
                                                            </div>
                                                            <div className="text-sm opacity-50">
                                                                Russia
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Rowe-Schoen
                                                    <br />
                                                    <span className="badge badge-ghost badge-sm">
                                                        Office Assistant I
                                                    </span>
                                                </td>
                                                <td>Crimson</td>
                                                <th>
                                                    <button className="btn btn-ghost btn-xs">
                                                        details
                                                    </button>
                                                </th>
                                            </tr>
                                            {/* row 4 */}
                                            <tr>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div>
                                                            <div className="font-bold">
                                                                Yancy Tear
                                                            </div>
                                                            <div className="text-sm opacity-50">
                                                                Brazil
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Wyman-Ledner
                                                    <br />
                                                    <span className="badge badge-ghost badge-sm">
                                                        Community Outreach
                                                        Specialist
                                                    </span>
                                                </td>
                                                <td>Indigo</td>
                                                <th>
                                                    <button className="btn btn-ghost btn-xs">
                                                        details
                                                    </button>
                                                </th>
                                            </tr>
                                        </tbody>
                                        {/* foot */}
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Job</th>
                                                <th>Favorite Color</th>
                                                <th></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="modal-action">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn btn-neutral">Close</button>
                                </div>
                            </form>
                        </dialog>
                    </div>
                    <Link to="/login" className="btn">
                        LOGIN
                    </Link>
                </div>
            </div>
            <Outlet />
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Navbar;
