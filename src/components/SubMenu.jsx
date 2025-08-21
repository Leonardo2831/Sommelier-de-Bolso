
import React from 'react';
import { Link } from 'react-router-dom';
// deve desestruturar, pois os valores são passados dentro de um objeto
const SubMenu = React.forwardRef(function SubMenu({ options, styleTransform }, ref) {
    const styleMenu = 
        `shadow absolute z-20 ${styleTransform}
        flex-col items-center gap-3 w-[200px]
        py-3 rounded-b-lg bg-beige dark:bg-gray`;

    return (
        <ul data-sub-menu ref={ref} 
        className={styleMenu}>           
            {options.map((option, index) => {  
                const {text, link, element} = option;

                return (
                    <li key={index} 
                        className='w-full p-2 flex items-center justify-center 
                        capitalize text-2xl font-medium
                        text-maple hover:text-red dark:text-gold dark:hover:text-beige
                        transition-colors duration-150'
                    >
                        {
                            element ? element : link 
                            && text ? <Link className="w-full text-center font-medium" to={link}>{text}</Link> 
                            : text
                        }
                    </li>
                )
            })}
        </ul>
    )
});

export default SubMenu;