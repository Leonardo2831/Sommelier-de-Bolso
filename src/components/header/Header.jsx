import React from 'react';
import initClickOutside from '../../javascript/clickOutside.js';

import LinksNav from './LinksNav.jsx';
import Logo from '../Logo.jsx';
import SubMenu from '../SubMenu.jsx';

const Header = () => {
    const [open, setOpen] = React.useState(false);

    const menuRef = React.useRef(null);
    const mobileRef = React.useRef(null);

    React.useEffect(() => {
        if(open){
            mobileRef.current.classList.add('activeMenu');
        } else {          
            mobileRef.current.classList.remove('activeMenu');
        }
    }, [open]);

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
                ref={mobileRef}
                className='flex flex-col gap-3 cursor-pointer p-4 sm:hidden
                    *:w-12 *:h-1 *:bg-maple hover:*:bg-red 
                    dark:*:bg-gold dark:hover:*:bg-beige 
                    *:transition-all *:duration-300 *:ease-in-out'
                onClick={(event) => {
                        event.stopPropagation(); 
                        setOpen(!open);
                    }
                }
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav>
                <LinksNav options={options} />
                <SubMenu options={options} styleTransform="transform-valueLinks" ref={menuRef} />
            </nav>
            
            <Logo visibleMenu={true} />
        </header>
    )
}

export default Header;