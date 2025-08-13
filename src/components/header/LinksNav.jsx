import React from 'react';
import initClickOutside from '../../javascript/clickOutside.js';

import SubMenu from '../SubMenu.jsx';

const LinksNav = () => {
    const [open, setOpen] = React.useState(false);

    const menuRef = React.useRef(null);

    React.useEffect(() => {
        initClickOutside(open, setOpen, menuRef);
    }, [open]);

    return (
        <ul 
            className='flex flex-wrap items-center gap-3 
            *:p-2 *:text-[32px] *:font-medium *:cursor-pointer 
            *:text-maple *:hover:text-red dark:*:text-gold dark:*:hover:text-beige
            *:transition-colors *:duration-200 max-sm:*:text-2xl'>
            <li>
                <a href="/index.html">Home</a>
            </li>
            <li onClick={() => {setOpen(!open)}} data-button-menu className='relative'>
                <p>Vinhos</p>
                <SubMenu 
                    ref={menuRef}
                    transform="left-valueLinks"
                    options={
                        [
                            { text: 'Barricas', link: '#link1'}, 
                            { text: 'Aromas', link: '#link2'},
                            { text: 'uvas', link: '#uvas'},
                        ]
                    } 
                />
            </li>
            <li>
                <a href="#">Terroir</a>
            </li>
        </ul>
    )
}

export default LinksNav;