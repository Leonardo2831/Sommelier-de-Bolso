import { Link } from 'react-router-dom';

import Head from '../../Head';
import InitPages from '../../initPages';
import AboutTerroir from './AboutTerroir';
import AffectedGrapes from './AffectedGrapes';

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
            <AboutTerroir/>
            <AffectedGrapes/>
            <div className='my-5 flex justify-center items-center'>
                <Link to="Uvas" 
                    className='uppercase font-semibold font-sans 
                    text-2xl px-9 py-3 bg-gold text-white
                    max-w-[300px] w-full rounded-[10px] text-center'
                >
                    ver mais -&gt;
                </Link>
            </div>
            
        </main>
    )
}

export default MainTerroir;