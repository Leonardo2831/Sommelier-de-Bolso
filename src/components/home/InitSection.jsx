import wines from '../../../public/data/wines.js';

const InitSection = () => {
    const choiceWine = Math.floor(Math.random() * wines.length);
    const {name, image} = wines[choiceWine];

    const initImageSrc = image;
    const initImageAlt = name;
    
    return (
        <section 
            className='flex items-center justify-center gap-[10px] p-[60px] 
            max-sm:flex-col max-sm:flex-wrap max-sm:p-10'
        >
            <article className='flex-1 flex items-center justify-center basis-[200px]'>
                <h1 className='text-4xl text-maple dark:text-gold sm:text-[40px]'>
                    Seja um 
                    <br/>
                    <span className='text-[40px] font-semibold text-red dark:text-beige sm:text-[44px]'>Sommelier </span> 
                    apenas
                    <br/>
                    com seu 
                    <span className='text-[40px] font-semibold text-red dark:text-beige sm:text-[44px]'> bolso</span>
                    <span className='font-semibold text-gold dark:text-red'>.</span>
                </h1>
            </article>
            <figure 
                className='relative overflow-hidden h-fit flex-1 flex items-center justify-center sm:basis-[300px] sm:justify-start'
            >
                <img 
                    className='-rotate-[18deg] max-w-[420px] w-full max-h-[500px] max-sm:max-w-[300px] max-sm:-translate-x-[40px]' 
                    src="/images/details-background.png" 
                    alt="Detalhe de fundo" 
                />
                <img className='absolute top-1/2 left-1/2 -translate-1/2 w-[250px] h-full object-contain max-sm:w-[250px] z-10' src={initImageSrc} alt={initImageAlt}/>
            </figure>
        </section>
    )
}

export default InitSection;