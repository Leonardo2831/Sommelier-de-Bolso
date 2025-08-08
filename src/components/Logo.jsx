import React from "react";

import ButtonToggleMode from "./header/ButtonToggleMode";
import SubMenu from "./SubMenu";

const Logo = () => {
    // não usar public, pois a pasta public é ignorada pelo browser
    const urlLogo = '/icons/logo.png';
    const altLogo = 'Sommelier de Bolso';

    const [ menuOpened, setMenuOpened ] = React.useState(false);
    const menuRef = React.useRef();

    React.useEffect(() => {
        const html = document.documentElement;
        let clickOutside = ({ target }) => {
            if(target){
                setMenuOpened(false);
            }
        }

        console.log(menuRef);
        

        html.addEventListener('mousedown', clickOutside);
    });
    

    return (
        <figure onClick={() => {setMenuOpened(!menuOpened)}} className='relative w-[100px] p-[10px] cursor-pointer'>
            <img className='max-w-[100px]' src={urlLogo} alt={altLogo} />
            {menuOpened && <SubMenu
                ref={menuRef} 
                options={[
                    {text: 'Configurações'},
                    {element: <ButtonToggleMode/>}
                ]} 
                />}
        </figure>
    )
}

export default Logo;
