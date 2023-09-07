import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Test from "./pages/Test";
import Framer from "./pages/Framer";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Test />} path="/test" />
                <Route element={<Framer />} path="/framer" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
