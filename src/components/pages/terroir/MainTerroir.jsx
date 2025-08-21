import React from 'react';

import Head from '../../Head';
import InitPages from '../../initPages';

const MainTerroir = () => {
    return (
        <main>
            <Head titleText='Terroir | Sommelier de Bolso' />
            <InitPages 
                title='Terroir'
                optionVideo={true} 
                srcVideo={'/video/terroir-movement.mp4'} 
                imageOption={'/video/background-terroir.jpg'} 
                typeVideo='video/mp4' 
            />
        </main>
    )
}

export default MainTerroir;