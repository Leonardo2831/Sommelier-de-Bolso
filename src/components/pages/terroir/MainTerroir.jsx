import { Link } from 'react-router-dom';

import Head from '../../Head';
import InitPages from '../../InitPages';
import AboutTerroir from './AboutTerroir';
import AffectedGrapes from './AffectedGrapes';
import SectionListTerroir from './SectionListTerroir';

const MainTerroir = () => {
    const textClimate = 'Cria a condição necessária para o melhor amadurecimento da uva, definindo a “alma do vinho”.';
    const listClimate = [
        '<strong className="text-[22px] font-semibold">Macroclima: </strong><span>O clima geral de uma grande região.</span>',
        '<strong className="text-[22px] font-semibold">Mesoclima: </strong><span>O clima específico de um vinhedo ou de uma encosta, influenciado diretamente pelo relevo.</span>',
        '<strong className="text-[22px] font-semibold">Microclima: </strong><span>O clima imediato ao redor da videira e do cacho de uva, que pode ser manejado pela ação humana (poda, por exemplo).</span>',
    ];
        
    const textRelief = 'O relevo, que engloba a topografia, altitude, inclinação e orientação das encostas, é um dos pilares que definem o terroir de um vinho. Ele age como um grande modulador do clima e interage diretamente com o solo, influenciando de maneira decisiva como a videira se desenvolve e, consequentemente, o estilo e a qualidade do vinho.';
    const listRelief = [
        'Quanto maior a altitude, maior a diferença de temperatura entre o dia e a noite. Dias quentes e ensolarados permitem o perfeito amadurecimento das uvas, enquanto as noites frias preservam a acidez natural da fruta.',
        'Em altitudes mais elevadas, a radiação ultravioleta é mais intensa.',
    ];

    return (
        <main>
            <Head titleText='Terroir | Sommelier de Bolso' />
            <InitPages 
                title='Terroir'
                optionVideo={true} 
                srcVideo='/video/terroir-movement.mp4' 
                imageOption='/video/background-terroir.jpg' 
                typeVideo='video/mp4' 
            />
            <AboutTerroir/>
            <AffectedGrapes/>
            <div className='my-5 flex justify-center items-center'>
                <Link to="Uvas" 
                    className='flex items-center justify-center gap-3 uppercase font-semibold font-sans 
                    text-2xl px-9 py-3 bg-gold text-white
                    max-w-[300px] w-full rounded-[10px] text-center
                    cursor-pointer hover:opacity-90 transition-all duration-150'
                >
                    <p>Ver Mais</p>
                    <img className='w-8 h-8' src="/icons/arrow.svg" alt="Sobre as uvas" />
                </Link>
            </div>
            <SectionListTerroir 
                title='Clima' 
                text={textClimate} 
                list={listClimate}
            />
            <SectionListTerroir 
                title='Papel do relevo' 
                text={textRelief} 
                list={listRelief} 
                srcImage='/images/relevo.jpg'
                altImage='Relevo'
            />
        </main>
    )
}

export default MainTerroir;
