import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header>
            <nav>
                <img src='/hammond-center.png' alt='hammond center logo'></img>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/About">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/Projects">PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/Contact">CONTACT ME</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;