import React from 'react';

import Head from '../../Head';
import InitPages from '../../initPages';

const MainOakBarrel = () => {
    return (
        <main>
            <Head titleText='Barricas | Sommelier de Bolso' />
            <InitPages
                title='Barricas'
                optionImage={true} 
                srcImage={'/public/images/background-barrel.jpg'} 
                altImage={'Barricas'}
            />
        </main>
    )
}

export default MainOakBarrel;