import React from 'react';
import LinksNav from './header/LinksNav.jsx';
import Logo from './Logo.jsx';

const Header = () => {
    return ( 
        <header>
            <nav>
                <LinksNav/>
            </nav>
            
            <Logo/>
        </header>
    )
}

export default Header;