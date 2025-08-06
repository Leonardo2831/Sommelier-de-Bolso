import React from 'react';
import SubMenu from '../SubMenu.jsx';

const LinksNav = () => {
    return (
        <ul>
            <li>Home</li>
            <li>
                <p>Vinhos</p>
                <SubMenu 
                    options={['Barricas', 'Aromas']}>
                </SubMenu>
            </li>
            <li>
                <a href="#">Uvas</a>
            </li>
            <li>
                <a href="#">Terroir</a>
            </li>
        </ul>
    )
}

export default LinksNav;