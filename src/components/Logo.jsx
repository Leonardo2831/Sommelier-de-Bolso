import React from 'react';

const Logo = () => {
    // colocando as imagens na pasta public consigo utilizar com o link seguido pelo arquivo.
    const urlLogo = '../../public/icons/logo.png';
    return (
        <figure>
            <img src={urlLogo} alt="Sommelier de Bolso" />
        </figure>
    )
}

export default Logo;