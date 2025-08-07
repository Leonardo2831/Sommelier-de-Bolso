import React from 'react';

const Logo = () => {
    const urlLogo = '/public/icons/logo.png';
    return (
        <figure>
            <img src={urlLogo} alt="Sommelier de Bolso" />
        </figure>
    )
}

export default Logo;