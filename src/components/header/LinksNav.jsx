import React from 'react';
import initClickOutside from '../../javascript/clickOutside.js';

import SubMenu from '../SubMenu.jsx';

const LinksNav = () => {
    const [ menuOpened, setMenuOpened ] = React.useState(false);

    const refMenu = React.useRef(null);

    React.useEffect(() => {
        initClickOutside(open, setOpen, menuRef);
    }, [open]);

    return (
        <ul className='flex flex-wrap items-center gap-5 *:p-2 *:cursor-pointer'>
            <li>
                <a href="/index.html">Home</a>
            </li>
            <li onClick={() => {setMenuOpened(!menuOpened)}} data-button-menu className='relative'>
                <p>Vinhos</p>
                {menuOpened && <SubMenu 
                    refProp={refMenu} 
                    options={
                        [
                            { text: 'Barricas', link: '#link1'}, 
                            { text: 'Aromas', link: '#link2'}
                        ]
                    } 
                />}
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