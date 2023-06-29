import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./views/AdminLogin";
import Navbar from "./components/Navbar";
import Landing from "./views/Landing";
import Sidebar from "./components/Sidebar";
import Dashboard from "./admin/Dashboard";
import Products from "./admin/Products";
import Sales from "./admin/Sales";
import UserLogin from "./views/UserLogin";
import UserRegistration from "./views/UserRegistration";
import ClientProduct from "./views/ClientProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Landing />} />
          <Route path="product" element={<ClientProduct />}/>
        </Route>
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="user" element={<UserLogin />} />
        <Route path="register" element={<UserRegistration />} />
        <Route path="admin" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="sales" element={<Sales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
