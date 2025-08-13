import wines from '../../../public/data/wines.js';

const InitSection = () => {
    const choiceWine = Math.floor(Math.random() * wines.length);
    const {name, image} = wines[choiceWine];

    const initImageSrc = image;
    const initImageAlt = name;
    
    return (
        <section 
            className='flex items-center justify-center gap-[30px] p-[30px] 
            max-sm:flex-col max-sm:flex-wrap max-sm:py-5 max-sm:px-5'
        >
            <article className='flex-1 flex items-center justify-center basis-[200px]'>
                <h1 className='text-5xl text-maple dark:text-gold max-sm:text-4xl'>
                    Seja um 
                    <br/>
                    <span className='font-semibold text-red dark:text-beige'>Sommelier </span> 
                    apenas
                    <br/>
                    com seu 
                    <span className='font-semibold text-red dark:text-beige'> bolso</span>
                    <span className='font-semibold text-gold dark:text-red'>.</span>
                </h1>
            </article>
            <figure 
                className='relative h-fit flex-1 flex items-center justify-center sm:basis-[300px] sm:justify-start'
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