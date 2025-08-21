import { NavLink } from 'react-router-dom';

const LinksNav = ({ options }) => {
    return (
        <ul 
            className='hidden flex-wrap items-center gap-3 
            *:p-2 *:text-2xl *:font-medium *:cursor-pointer 
            *:text-maple *:hover:text-red dark:*:text-gold dark:*:hover:text-beige
            *:transition-colors *:duration-150 sm:*:text-[32px] md:text-[32px] sm:flex'>
            {options.map((option, index) => {
                return (
                    <li key={index}>
                        <NavLink to={option.link}>{option.text}</NavLink>
                    </li>
                )
            })}
        </ul>
    )
};

export default LinksNav;


// <li onClick={() => {setOpen(!open)}} data-button-menu className='relative'>
//                 <SubMenu 
//                     ref={menuRef}
//                     transform="left-valueLinks"
//                     options={
//                         [
//                             { text: 'Home', link: '/'},
//                             { text: 'Barricas', link: 'Barricas'}, 
//                             { text: 'Aromas', link: 'Aromas'},
//                             { text: 'Uvas', link: 'Uvas'},
//                             { text: 'Terroir', link: 'Terroir'},
//                         ]
//                     } 
//                 />
//             </li>
