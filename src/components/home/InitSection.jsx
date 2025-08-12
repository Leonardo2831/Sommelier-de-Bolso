import React from 'react'

const InitSection = () => {
    const [initImageSrc, setInitImageSrc] = React.useState(undefined);
    const [initImageAlt, setInitImageAlt] = React.useState(undefined);

    const requestRadomWine = async () => {

        try {
            const URL = '../../../public/data/wine.json'

            const responseWine = await fetch(URL);

            if(!responseWine.ok){
                console.error(`Houve um erro: ${responseWine.status}!`);
                return;
            }

            const wines = await responseWine.json();

            const choiceWineNumber = Math.floor(Math.random() * wines.length);            
            const {name, image} = wines[choiceWineNumber];

            setInitImageAlt(name);
            setInitImageSrc(image);
        } catch (error) {
            console.error(`Houve um erro: ${error}!`);
            setInitImageAlt('Collection Sangiovese');
            setInitImageAlt('../../../public/images/default-wine.png');
        } 
         
    }
    
    React.useEffect(() => {
        requestRadomWine();
    }, [])

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
                className='relative flex-1 flex items-center justify-center sm:basis-[300px] sm:justify-start'
            >
                <img 
                    className='-rotate-[18deg] max-w-[420px] w-full max-sm:max-w-[300px] max-sm:-translate-x-[40px]' 
                    src="../../../public/images/details-background.png" 
                    alt="Detalhe de fundo" 
                />
                <img className='absolute top-1/2 left-1/2 -translate-1/2 w-[250px] h-[400px] object-contain max-sm:w-[250px] z-10' src={initImageSrc} alt={initImageAlt}/>
            </figure>
        </section>
    )
}

export default InitSection;