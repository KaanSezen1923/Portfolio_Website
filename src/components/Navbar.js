import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <div className="nav-content">
                <ul className="nav-items">
                    <li onClick={() => scrollToSection('home')}>Home</li>
                    <li onClick={() => scrollToSection('about')}>About</li>
                    <li onClick={() => scrollToSection('skills')}>Skills</li>
                    <li onClick={() => scrollToSection('projects')}>Projects</li>
                    <li onClick={() => scrollToSection('articles')}>Articles</li>
                    <li onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;