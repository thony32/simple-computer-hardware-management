import { Link, Outlet, useMatch, useNavigate } from "react-router-dom";
import DashboardLogo from "../assets/DashboardLogo";
import ProductLogo from "../assets/ProductLogo";
import SaleLogo from "../assets/SaleLogo";
import SignoutLogo from "../assets/SignoutLogo";
import { useEffect } from "react";

export default function Sidebar() {
    const login = localStorage.getItem("login")
    const navigate = useNavigate();
    useEffect(() => {
      if (login === "") {
        navigate("/adminLogin")
      }
    }, [])

    function logout (){
        localStorage.removeItem("login");
        navigate("/adminLogin")
    }

    function ActiveNavigation2({ to, children }: any) {
        const match = useMatch(to);
        return (
            <Link
                to={to}
                className={
                    match
                        ? "bg-[#00457C] text-base-200 rounded-lg md:p-8 md:text-lg hover:bg-[#00457C] hover:text-base-200"
                        : "rounded-lg p-8 text-lg hover:md:bg-[#00457C] hover:md:text-base-100 active:bg-[#00457C]"
                }
            >
                {children}
            </Link>
        );
    }

    function MobileNavigation({ to, children }: any) {
        const match = useMatch(to);
        return (
            <Link to={to} className={match ? "btn text-base-100 bg-[#00457C]" : "btn shadow-md"}>
                {children}
            </Link>
        );
    }
    return (
        <div className="flex md:flex-row flex-col">
            {/* Sidebar Wide Screen */}
            <div className="hidden md:flex md:fixed">
                <div className="menu bg-base-200 w-56 rounded-box h-screen flex justify-between">
                    <div className="md:space-y-8">
                        <li>
                            <ActiveNavigation2 to="/admin">
                                <DashboardLogo/>
                                Dashboard
                            </ActiveNavigation2>
                        </li>
                        <li>
                            <ActiveNavigation2 to="/admin/products">
                                <ProductLogo/>
                                Products
                            </ActiveNavigation2>
                        </li>
                        <li>
                            <ActiveNavigation2 to="/admin/sales">
                                <SaleLogo/>
                                Sales
                            </ActiveNavigation2>
                        </li>
                    </div>

                    <div className="flex flex-col justify-center">
                        <button
                            onClick={logout}
                            className="btn bg-red-500 hover:bg-red-800 flex justify-center items-center rounded-lg"
                        >
                            <SignoutLogo/>

                            <span className="text-center text-base-100">
                                Sign Out
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* sidebar mobile screen */}
            <div className="md:hidden flex fixed bg-base-200 w-screen justify-between z-10">
                <div className="p-3">
                    <MobileNavigation to="/admin">
                        <DashboardLogo/>
                    </MobileNavigation>
                </div>
                <div className="p-3">
                    <MobileNavigation to="/admin/products">
                        <ProductLogo/>
                    </MobileNavigation>
                </div>
                <div className="p-3">
                    <MobileNavigation to="/admin/sales">
                        <SaleLogo/>
                    </MobileNavigation>
                </div>
                <div className="p-3">
                    <button onClick={logout} className="btn bg-red-500">
                        <SignoutLogo/>
                    </button>
                </div>
            </div>

            <div className="p-8 md:ml-56 mt-12 md:mt-0 w-screen">
                <Outlet />
            </div>
        </div>
    );
}
