import CardTerroir from "./CardTerroir";

const AboutTerroir = () => {
    return (
        <section className='p-10'>
            <h2 className='mb-[30px] text-4xl font-semibold text-maple dark:text-gold sm:text-[40px]'>Compreendendo o Terroir</h2>
            <div className='flex flex-col gap-10 md:flex-row'>
                <p className='flex-1 font-sans text-xl text-light-gray dark:text-beige'>
                    Terroir é uma palavra que frequentemente aparece quando o assunto é  vinho. Ele é o conjunto de fatores, como subsolo, relevo, insolação, chuvas, ventos e quaisquer outros fatores da natureza geológica ou climática, que acabam por determinar o caráter da uva, que futuramente será vinho.
                </p>
                <div 
                    className='flex flex-wrap justify-center gap-5 
                    md:grid md:grid-cols-[auto_auto]'
                >
                    <CardTerroir text='Vulcânico' srcImage='/images/terroirs/vulcanico.jpg' altImage='Terroir Vulcânico' />
                    <CardTerroir text='Arenoso' srcImage='/images/terroirs/arenoso.jpg' altImage='Terroir Arenoso' />
                    <CardTerroir text='Argiloso' srcImage='/images/terroirs/argiloso.jpg' altImage='Terroir Argiloso' />
                    <CardTerroir text='Calcário' srcImage='/images/terroirs/calcario.jpg' altImage='Terroir de Calcário' />
                </div>
            </div>
        </section>
    )
}

export default AboutTerroir;