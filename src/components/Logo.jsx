import React from 'react';

const Logo = () => {
    // não usar public, pois a pasta public é ignorada pelo browser
    const urlLogo = '/icons/logo.png';
    return (
        <figure>
            <img src={urlLogo} alt="Sommelier de Bolso" />
        </figure>
    )
}

export default Logo;
