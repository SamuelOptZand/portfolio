import './App.css';
import React from "react";
import RouterHandler from "./RouterHandler";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";

function App() {
    return (
        <>
            <Header />
            <RouterHandler />
            <Footer />
        </>
    );
}

export default App;