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
                        <NavLink className={({ isActive }) => isActive ? 'active font-medium' : 'font-medium'} 
                            to={option.link}>
                                <p className="py-2">{option.text}</p>
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    )
};

export default LinksNav;