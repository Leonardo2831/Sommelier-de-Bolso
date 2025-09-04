import grapesInfo from '../../../../public/data/grapes.js';
import GrapeTerroir from './GrapeTerroir';

const AffectedGrapes = () => {

    return (
        <section className='p-10'>
            <h3 className='mb-[30px] text-[32px] font-semibold text-maple dark:text-gold sm:text-[36px]'>
                Uvas mais sensíveis às mudanças do terroir
            </h3>
            <div className='grid gap-[30px] sm:grid-cols-[minmax(200px,1fr)_minmax(200px,1fr)] sm:grid-rows-[auto_400px_300px_300px]'>
                <GrapeTerroir 
                    gridClassText='sm:col-span-2' gridClassImage='sm:col-span-2' 
                    nameGrape={grapesInfo.riesling.nameGrape} 
                    textGrape={grapesInfo.riesling.textInfoGrape} 
                    srcImage={grapesInfo.riesling.urlImageGrape} 
                />
                <GrapeTerroir gridClassText='sm:col-span-1 row-span-2 self-center' gridClassImage='sm:row-span-2'               
                    nameGrape={grapesInfo.pinot_noir.nameGrape} 
                    textGrape={grapesInfo.pinot_noir.textInfoGrape} 
                    srcImage={grapesInfo.pinot_noir.urlImageGrape} 
                />
            </div>
        </section>
    )
}

export default AffectedGrapes;