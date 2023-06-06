import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                    <Route index element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    {/* <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} /> */}

            </Routes>
        </BrowserRouter>
    );
}

export default App;
