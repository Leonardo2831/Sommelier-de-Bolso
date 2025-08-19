import React from 'react';
import initClickOutside from '../../javascript/clickOutside.js';

import SubMenu from '../SubMenu.jsx';
import { Link } from 'react-router-dom';

const LinksNav = () => {
    const [open, setOpen] = React.useState(false);

    const menuRef = React.useRef(null);

    React.useEffect(() => {
        initClickOutside(open, setOpen, menuRef);
    }, [open]);

    return (
        <ul 
            className='flex flex-wrap items-center gap-3 
            *:p-2 *:text-2xl *:font-medium *:cursor-pointer 
            *:text-maple *:hover:text-red dark:*:text-gold dark:*:hover:text-beige
            *:transition-colors *:duration-150 sm:*:text-[32px] md:text-[32px]'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li onClick={() => {setOpen(!open)}} data-button-menu className='relative'>
                <p>Vinhos</p>
                <SubMenu 
                    ref={menuRef}
                    transform="left-valueLinks"
                    options={
                        [
                            { text: 'Barricas', link: 'Barricas'}, 
                            { text: 'Aromas', link: 'Aromas'},
                            { text: 'uvas', link: 'Uvas'},
                        ]
                    } 
                />
            </li>
            <li>
                <Link to='Terroir'>Terroir</Link>
            </li>
        </ul>
    )
}

export default LinksNav;