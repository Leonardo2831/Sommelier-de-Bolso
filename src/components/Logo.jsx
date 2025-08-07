import useAppContext from "../hooks/useAppContext";

import ButtonToggleMode from "./header/ButtonToggleMode";
import SubMenu from "./SubMenu";

const Logo = () => {
    // não usar public, pois a pasta public é ignorada pelo browser
    const urlLogo = '/icons/logo.png';
    const altLogo = 'Sommelier de Bolso';

    const {openMenu} = useAppContext();

    return (
        <figure onClick={openMenu} className='relative max-w-[100px] p-[10px] cursor-pointer'>
            <img className='w-full' src={urlLogo} alt={altLogo} />
            <SubMenu options={
                [
                    {text: 'Configurações'},
                    {element: <ButtonToggleMode/>}
                ]
            } />
        </figure>
    )
}

export default Logo;
