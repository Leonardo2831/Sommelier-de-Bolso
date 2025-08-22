import GrapeTerroir from './GrapeTerroir';

const AffectedGrapes = () => {
    const textRiesling = 'Ela enfrenta enorme dificuldade para se adaptar fora de suas regiões de origem (principalmente Alemanha e Alsácia). Sua sensibilidade ao tipo de solo e clima é muito alta, não se adaptando a ficar com outras uvas. Além disso, ela não se beneficia do envelhecimento em madeira, o que dificulta ainda mais seu cultivo e vinificação em outras regiões. ';
    const textPinotNoir = 'Para seu cultivo, é necessário solo e clima em perfeita sintonia, leveduras nativas e o cuidadoso uso do amadurecimento em madeira, são eles requisitos mínimos para o sucesso dessa exigente uva. Contudo, com todos os requisitos, a recompensa é extremamente compensadora, resultando em vinhos elegantes e de complexidade singurares.';

    return (
        <section className='grid gap-[30px] p-10'>
            <h3 className='text-[32px] font-semibold text-maple dark:text-gold sm:text-[36px]'>
                Uvas mais sensíveis às mudanças do terroir
            </h3>
            <GrapeTerroir nameGrape='Riesling' textGrape={textRiesling} 
                srcImage='https://upload.wikimedia.org/wikipedia/commons/c/c4/Grape_near_Sancerre.jpg' 
            />
            <GrapeTerroir nameGrape='Pinot Noir' textGrape={textPinotNoir} 
                srcImage='https://upload.wikimedia.org/wikipedia/commons/7/76/Riesling_grapes_leaves.jpg' 
            />
        </section>
    )
}

export default AffectedGrapes;