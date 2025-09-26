import Head from '../../Head';
import MosaicGrapes from './MosaicGrapes';

const MainGrapes = () => {
    return (
        <>
            <Head titleText='Uvas | Sommelier de Bolso' />
            <main className='p-7 sm:p-10'>
                <div>
                    <h1 className='text-[40px] font-semibold text-maple dark:text-gold'>
                        Não sabe nada sobre as uvas?
                    </h1>
                    <h2 className='text-[32px] font-medium mt-[50px] mb-10 text-gray dark:text-cream'>
                        A Essência da Videira: A distinção entre uvas Viníferas e Americanas
                    </h2>
                </div>
                <section 
                    className='grid grid-cols-1 gap-x-[20px] gap-y-[30px] font-sans text-xl 
                    text-light-gray dark:text-beige sm:gap-x-[30px] sm:gap-y-[50px] sm:grid-cols-6'
                >
                    <p className='sm:col-span-3'>A essência dos grandes vinhos está na Vitis vinifera, espécie ancestral originária da Europa e da região do Mediterrâneo, base de praticamente todos os vinhos finos do mundo. Sua estrutura é perfeita para a vinificação: a casca fornece cor e taninos, enquanto a polpa equilibra açúcares e acidez. Castas como Cabernet Sauvignon, Chardonnay e Pinot Noir traduzem essa herança, expressando a identidade do terroir em cada safra.</p>
                    <img 
                        className='row-start-1 sm:row-auto sm:col-span-3 w-full h-full max-h-[500px] object-cover rounded-xl' 
                        src="/images/vitis-viniferas.png" 
                        alt="Vitis Viniferas"
                    />
                    <img 
                        className='sm:col-span-2 w-full h-full max-h-[500px] object-cover rounded-xl' 
                        src="/images/vitis-labruscas.jpg" 
                        alt="Vitis Labruscas" 
                    />
                    <p className='sm:col-span-4'>
                        Em contrapartida, encontramos a Vitis labrusca, o vibrante espírito do Novo Mundo. Nativas da América do Norte, estas uvas, como a Isabel e a Concord, possuem uma natureza distinta. Sua vocação se revela no consumo in natura e na elaboração de sucos exuberantes, graças à sua polpa suculenta e a um perfil aromático inconfundível, intensamente frutado.
                        Compreender essa distinção fundamental não é apenas um exercício técnico, mas o primeiro passo para aprofundar a apreciação pela diversidade e pela maestria encontradas em cada taça.
                        Há castas assim como Bordô, Niágara, Isabel...
                    </p>
                </section>
                <h3 className='mt-[30px] mb-[20px] text-[28px] font-medium text-light-gray dark:text-beige'>
                    Compreender essa diferença é o primeiro passo para apreciar ainda mais cada taça.
                </h3>
                <h3 className='text-[28px] font-medium text-light-gray dark:text-beige'>
                    Agora que você já sabe a base, explore as uvas e descubra o estilo que mais combina com você.
                </h3>
                <MosaicGrapes/>
            </main>
        </>
    )
}

export default MainGrapes;