import React from "react";
import useAppContext from "../hooks/useAppContext";

import ButtonToggleMode from "./header/ButtonToggleMode";
import SubMenu from "./SubMenu";

const Logo = () => {
    // não usar public, pois a pasta public é ignorada pelo browser
    const urlLogo = '/icons/logo.png';
    const altLogo = 'Sommelier de Bolso';

    const [ menuOpened, setMenuOpened ] = React.useState(false);
    const refMenu = React.useRef(null);

    React.useEffect(() => {
        console.log(menuOpened);
        const html = document.documentElement;

        function clickOutside({target}){
            if(refMenu.current.contains(target)){
                setMenuOpened(true);
            } else {
                setMenuOpened(false);
            }
        }

        if(menuOpened){
            html.addEventListener('click', clickOutside);
        }

        return () => html.removeEventListener('click', clickOutside);
    }, [menuOpened]);

    return (
        <figure onClick={() => {setMenuOpened(!menuOpened)}} className='relative w-[100px] p-[10px] cursor-pointer'>
            <img className='max-w-[100px]' src={urlLogo} alt={altLogo} />
            {menuOpened && <SubMenu 
                refProp={refMenu} 
                options={[
                    {text: 'Configurações'},
                    {element: <ButtonToggleMode/>}
                ]} 
                />}
        </figure>
    )
}

export default Logo;
