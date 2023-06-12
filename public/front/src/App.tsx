import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Navbar from "./components/navbar";
import Landing from "./views/Landing";
import Sidebar from "./components/sidebar";
import Dashboard from "./admin/Dashboard";
import Products from "./admin/Printers";
import Printers from "./admin/Printers";
import Computers from "./admin/Computers";
import Networks from "./admin/Networks";
import Others from "./admin/Others";
import Billing from "./admin/Billing";
import Invoice from "./admin/Invoice";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Landing />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="admin" element={<Sidebar/>}>
                    <Route index element={<Dashboard />} />
                    <Route path="printers" element={<Printers />} />
                    <Route path="computers" element={<Computers />} />
                    <Route path="networks" element={<Networks />} />
                    <Route path="others" element={<Others />} />
                    <Route path="billing" element={<Billing />} />
                    <Route path="invoice" element={<Invoice />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
