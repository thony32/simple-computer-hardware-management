import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Navbar from "./components/navbar";
import Landing from "./views/Landing";
import Sidebar from "./components/sidebar";
import Dashboard from "./admin/Dashboard";
import Products from "./admin/Products";
import Sales from "./admin/Sales";

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
                    <Route path="products" element={<Products />} />
                    <Route path="sales" element={<Sales />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
