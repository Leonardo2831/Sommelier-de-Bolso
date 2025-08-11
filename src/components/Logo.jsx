import React from "react";
import initClickOutside from "../javascript/clickOutside.js";

import ButtonToggleMode from "./header/ButtonToggleMode";
import SubMenu from "./SubMenu";

const Logo = () => {
    const urlLogo = '/icons/logo.png';
    const altLogo = 'Sommelier de Bolso';

    const [open, setOpen] = React.useState(false);
    const menuRef = React.useRef(null);

    React.useEffect(() => {
        initClickOutside(open, setOpen, menuRef);
    }, [open]);

    return (
        <figure
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
                transform="left-valueLogo"
                options={[
                    { text: 'Configurações' },
                    { element: <ButtonToggleMode /> }
                ]}
            />
        </figure>
    );
};

export default Logo;