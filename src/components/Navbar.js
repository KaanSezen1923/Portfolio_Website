import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false); // Menüden seçim yapınca drawer kapanır
    };

    return (
        <nav className="navbar">
            <div className="nav-content">
                <div className="nav-header">
                    <div
                        className={`hamburger ${isOpen ? 'active' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <ul className={`nav-items ${isOpen ? 'open' : ''}`}>
                    <li onClick={() => scrollToSection('home')}>Home</li>
                    <li onClick={() => scrollToSection('about')}>About</li>
                    <li onClick={() => scrollToSection('projects')}>Projects</li>
                    <li onClick={() => scrollToSection('articles')}>Articles</li>
                    <li onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
