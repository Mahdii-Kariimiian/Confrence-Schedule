import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import FAQ from "./FAQ";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
