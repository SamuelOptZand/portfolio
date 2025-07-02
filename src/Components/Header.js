import './Header.css';
import React, {useState} from "react";
import {Link} from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header>
                <button className={`menu-button ${isOpen ? "open" : ""}`} onClick={toggleMenu}> ☰ </button>
                <nav className={`menu ${isOpen ? "show" : ""}`}>
                    <ul>
                        <Link to="/" className="Links">Home</Link>
                        <Link to="/About" className="Links">About</Link>
                        <Link to="/Projects" className="Links">Projects</Link>
                        <Link to="/Contact" className="Links">Contact</Link>
                        <Link to="/Tester" className="Links">Tester</Link>
                    </ul>
                </nav>
        </header>
    );
}

export default Header;