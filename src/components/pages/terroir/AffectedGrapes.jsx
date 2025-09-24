import React from 'react';
import GrapeTerroir from './GrapeTerroir'
import AppContext from '../../../contexts/AppContext';

const AffectedGrapes = () => {

    const { allItems } = React.useContext(AppContext);
    const [grapes, setGrapes] = React.useState([]);
    
    React.useEffect(() => {       
        const affected = [];

        allItems.forEach((item) => {
            if(item.id == 'riesling' || item.id == 'pinot_noir'){
                affected.push(item); 
            }
        });

        setGrapes(affected);
    }, [allItems]);

    return (
        <section className='p-10'>
            <h3 className='mb-[30px] text-[32px] font-semibold text-maple dark:text-gold sm:text-[36px]'>
                Uvas mais sensíveis às mudanças do terroir
            </h3>
            <div className='grid gap-[30px] sm:grid-cols-[minmax(200px,1fr)_minmax(200px,1fr)] sm:grid-rows-[auto_400px_300px_300px]'>
                <>
                    {grapes[0] &&
                        <GrapeTerroir 
                            gridClassText='sm:col-span-2' 
                            gridClassImage='sm:col-span-2' 
                            nameGrape={grapes[0].grapeName} 
                            textGrape={grapes[0].textInfoGrape} 
                            srcImage={grapes[0].url} 
                        />
                    }     
                    {grapes[1] && 
                    <GrapeTerroir 
                            gridClassText='sm:col-span-1 row-span-2 self-center'
                            gridClassImage='sm:row-span-2'               
                            nameGrape={grapes[1].grapeName} 
                            textGrape={grapes[1].textInfoGrape} 
                            srcImage={grapes[1].url} 
                        />
                    }
                </>
            </div>
        </section>
    )
}

export default AffectedGrapes;