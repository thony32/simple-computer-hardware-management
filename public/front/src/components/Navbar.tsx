import { Link, Outlet, useMatch } from "react-router-dom";
import Footer from "./Footer";
import HomeLogo from "../assets/HomeLogo";
import PrinterLogo from "../assets/PrinterLogo";
import ComputerLogo from "../assets/ComputerLogo";
import NetworkLogo from "../assets/NetworkLogo";
import OthersLogo from "../assets/OthersLogo";
import ProductLogo from "../assets/ProductLogo";
import UserLogo from "../assets/UserLogo";

const Navbar = () => {
    function ActiveNavigation({ to, children }: any) {
        const match = useMatch(to);
        return (
            <Link
                to={to}
                className={
                    match
                        ? "bg-[#00457C] text-base-200 hover:bg-[#00457C] hover:text-base-200 rounded-lg p-3"
                        : "hover:bg-[#00457C] hover:text-base-200 rounded-lg p-3"
                }
            >
                {children}
            </Link>
        );
    }

    return (
        <>
            <div className="navbar bg-base-200 shadow-md lg:fixed">
                {/* Mobile screen */}

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
                                <Link to="/">
                                    <HomeLogo />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a>
                                    <PrinterLogo />
                                    Printers
                                </a>
                                <ul className="p-2">
                                    <li>
                                        <a>Laser Printer</a>
                                    </li>
                                    <li>
                                        <a>Inkjet Printer</a>
                                    </li>
                                    <li>
                                        <a>Others</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <ComputerLogo />
                                    Computers
                                </a>
                                <ul className="p-2">
                                    <li>
                                        <a>Laptop</a>
                                    </li>
                                    <li>
                                        <a>Desktop</a>
                                    </li>
                                    <li>
                                        <a>Monitors</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <NetworkLogo />
                                    Network
                                </a>
                                <ul className="p-2">
                                    <li>
                                        <a>Switches</a>
                                    </li>
                                    <li>
                                        <a>Routers</a>
                                    </li>
                                    <li>
                                        <a>Servers</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <OthersLogo />
                                    Others
                                </a>
                                <ul className="p-2">
                                    <li>
                                        <a>Mouse</a>
                                    </li>
                                    <li>
                                        <a>Keyboards</a>
                                    </li>
                                    <li>
                                        <a>Inverters</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <a className="btn btn-ghost normal-case text-xl"></a>
                </div>

                {/* wide screen */}

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-12">
                        <li>
                            <ActiveNavigation to="/">
                                <HomeLogo />
                                Home
                            </ActiveNavigation>
                        </li>

                        <li>
                            <ActiveNavigation to="product">
                                <ProductLogo />
                                Products
                            </ActiveNavigation>
                        </li>
                    </ul>
                </div>

                {/* Navbar end */}

                <div className="navbar-end space-x-0">
                    <Link
                        to="/user"
                        className="btn bg-[#0079C1] hover:bg-[#00457C] text-base-200 p-3"
                    >
                        <UserLogo />
                        Sign In
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
