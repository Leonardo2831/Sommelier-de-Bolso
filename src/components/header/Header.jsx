import React from 'react';
import initClickOutside from '../../javascript/clickOutside.js';

import LinksNav from './LinksNav.jsx';
import Logo from '../Logo.jsx';
import SubMenu from '../SubMenu.jsx';

const Header = () => {
    const [open, setOpen] = React.useState(false);

    const menuRef = React.useRef(null);

    React.useEffect(() => {    
        initClickOutside(open, setOpen, menuRef)
    }, [open]);

    const options = [
        { text: 'Home', link: '/'},
        { text: 'Barricas', link: 'Barricas'}, 
        { text: 'Aromas', link: 'Aromas'},
        { text: 'Uvas', link: 'Uvas'},
        { text: 'Terroir', link: 'Terroir'},
    ];

    return ( 
        <header className='relative flex justify-between items-center gap-3 px-10 py-5'>
            <div 
                className='flex flex-col gap-3 cursor-pointer p-4 
                *:w-12 *:h-1 *:bg-maple dark:*:bg-gold sm:hidden'
                onClick={(event) => {
                        event.stopPropagation(); 
                        setOpen(!open)
                    }
                }
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav>
                <LinksNav options={options} />
                <SubMenu options={options} transform="left-valueLinks" ref={menuRef} />
            </nav>
            
            <Logo visibleMenu={true} />
        </header>
    )
}

export default Header;