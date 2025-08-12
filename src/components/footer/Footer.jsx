import React from 'react';
import Logo from '../Logo';

const Footer = () => {
    return (
        <footer className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            <Logo visibleMenu={false}/>
            <ul>
                <li>
                    <a href="#">Terroir</a>
                    </li>
                <li>
                    <a href="#">Vinhos</a>
                    </li>
                <li>
                    <a href="#">Barricas</a>
                    </li>
                <li>
                    <a href="#">Aromas</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;