import GrapeTerroir from './GrapeTerroir';

const AffectedGrapes = () => {
    const textRiesling = 'Ela enfrenta enorme dificuldade para se adaptar fora de suas regiões de origem (principalmente Alemanha e Alsácia). Sua sensibilidade ao tipo de solo e clima é muito alta, não se adaptando a ficar com outras uvas. Além disso, ela não se beneficia do envelhecimento em madeira, o que dificulta ainda mais seu cultivo e vinificação em outras regiões. ';
    const textPinotNoir = 'Para seu cultivo, é necessário solo e clima em perfeita sintonia, leveduras nativas e o cuidadoso uso do amadurecimento em madeira, são eles requisitos mínimos para o sucesso dessa exigente uva. Contudo, com todos os requisitos, a recompensa é extremamente compensadora, resultando em vinhos elegantes e de complexidade singurares.';

    return (
        <section className='p-10'>
            <h3 className='mb-[30px] text-[32px] font-semibold text-maple dark:text-gold sm:text-[36px]'>
                Uvas mais sensíveis às mudanças do terroir
            </h3>
            <div className='grid gap-[30px] sm:grid-cols-[minmax(200px,1fr)_minmax(200px,1fr)] sm:grid-rows-[auto_400px_300px_300px]'>
                <GrapeTerroir gridClassText='sm:col-span-2' gridClassImage='sm:col-span-2' nameGrape='Riesling' textGrape={textRiesling} 
                    srcImage='https://upload.wikimedia.org/wikipedia/commons/c/c4/Grape_near_Sancerre.jpg' 
                />
                <GrapeTerroir gridClassText='sm:col-span-1 row-span-2 self-center' gridClassImage='sm:row-span-2' nameGrape='Pinot Noir' textGrape={textPinotNoir} 
                    srcImage='https://upload.wikimedia.org/wikipedia/commons/7/76/Riesling_grapes_leaves.jpg' 
                />
            </div>
        </section>
    )
}

export default AffectedGrapes;