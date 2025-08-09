import React from "react";
import ButtonToggleMode from "./header/ButtonToggleMode";
import SubMenu from "./SubMenu";

const Logo = () => {
    const urlLogo = '/icons/logo.png';
    const altLogo = 'Sommelier de Bolso';

    const [open, setOpen] = React.useState(false);
    const menuRef = React.useRef();
    const logoRef = React.useRef();

    React.useEffect(() => {
        const clickOutside = (event) => {        
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) ||
                logoRef.current &&
                logoRef.current.contains(event.target)
            ) {
                menuRef.current.classList.remove('active');
                setOpen(false);
            }
        };

        if(open){
            menuRef.current.classList.add('active');
        }

        document.addEventListener('click', clickOutside);
        return () => document.removeEventListener('click', clickOutside);
    }, [open]);

    return (
        <figure
            ref={logoRef}
            onClick={
                (event) => {
                    event.stopPropagation(); 
                    setOpen(!open);
                }
            }
            className="relative w-[100px] p-[10px] cursor-pointer"
        >
            <img className="max-w-[100px]" src={urlLogo} alt={altLogo} />
            <SubMenu
                ref={menuRef}
                options={[
                    { text: 'Configurações' },
                    { element: <ButtonToggleMode /> }
                ]}
            />
        </figure>
    );
};

export default Logo;