import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Tester from "./Pages/Tester";
function RouterHandler() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/tester' element={<Tester />} />
        </Routes>
    );
}

export default RouterHandler;