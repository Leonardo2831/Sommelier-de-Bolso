import ButtonToggleMode from "./header/ButtonToggleMode";
import SubMenu from "./SubMenu";

const Logo = () => {
    // não usar public, pois a pasta public é ignorada pelo browser
    const urlLogo = '/icons/logo.png';

    return (
        <figure className='max-w-[100px] p-[10px] cursor-pointer'>
            <img className='w-full' src={urlLogo} alt="Sommelier de Bolso" />
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
