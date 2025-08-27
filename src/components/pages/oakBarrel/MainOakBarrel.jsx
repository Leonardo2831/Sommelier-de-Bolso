import Head from '../../Head';
import InitPages from '../../InitPages';

const MainOakBarrel = () => {
    return (
        <main>
            <Head titleText='Barricas | Sommelier de Bolso' />
            <InitPages
                title='Barricas'
                optionVideo={true} 
                srcVideo='/video/barrel-movement.mp4'
                imageOption='/video/background-barrel.jpg'
                typeVideo='video/mp4'
            />
            <section className='p-10'>
                <h2 className='mb-[30px] text-4xl font-semibold text-maple dark:text-gold sm:text-[40px]'>Vinho e a madeira</h2>
                <p className='font-sans text-xl text-light-gray dark:text-beige'>
                    A história do uso da madeira no vinho é antiga, desde o transporte em barricas de palmeira no Egito antigo até a popularização das barricas de carvalho pelos gauleses e romanos. Inicialmente, a madeira era utilizada apenas para armazenamento, mas com o tempo foi descoberto que havia a troca de substâncias entre o vinho e a madeira.
                    <br />
                    No século XIX, grandes casas sediam suas barricas novas para serem utilizadas, durante alguns anos, para se perder aqueles “horríveis” aromas e sabores, diferentemente dos dias atuais que esses aromas são retratados como algo especial trazido para o vinho.
                    <br />
                    Antigamente foi se utilizado madeiras de acácia, cerejeira, nogueira e castanheiro, mas sem dúvidas nos dias atuais o carvalho é o mais utilizado por suas qualidades.
                </p>
            </section>
            <section className='px-10'>
                <h3 className='mb-[30px] text-[32px] font-semibold text-maple dark:text-gold sm:text-[36px]'>Por que o carvalho?</h3>
                <p className='font-sans text-xl text-light-gray dark:text-beige'>
                    A escolha do carvalho para barricas foi influenciada pela alta força tênsil, peso leve e maleabilidade. Mas, seu maior diferencial é sua impermeabilidade, impedindo passagem de oxigênio, responsável pelo processo de “micro oxigenação”.
                    <br />
                    Está qualidade é trazida principalmente pelo fato do carvalho possuir um sistema de vasos condutores de seiva composto de condutores que correm no sentido do tronco.
                </p>
            </section>
            <section className='p-10'>
                <h3 className='mb-[30px] text-[32px] font-semibold text-maple dark:text-gold sm:text-[36px]'>Caralho americano e francês</h3>
                    <div className='flex flex-col items-center sm:flow-root'>
                        <img className='shadow mb-[30px] rounded-md w-full max-w-[450px] sm:max-w-[400px] sm:float-right sm:ml-[30px] sm:mb-[15px]' 
                        src='/images/barrelMan.jpg' alt='Homem na barrica'
                        />
                        <p className='font-sans text-xl text-light-gray dark:text-beige'>
                            O carvalho americano diferencia se do francês, no que se diz a seu respeito, em sua influência sobre os vinhos, principalmente por duas razões: por ser muito mais aromático e rico em
                            substâncias chamadas de lactonas, que são responsáveis pelo característico aroma de coco e por possuir quantidade de taninos 40% menor. 
                        </p>  
                        <p className='mt-[15px] font-sans text-xl text-light-gray dark:text-beige'>
                            Em contrapartida, o carvalho francês é valorizado por sua contribuição mais sutil e elegante. Sua madeira de grão mais fino permite uma micro-oxigenação mais lenta do vinho e libera seus compostos de forma mais gradual.    
                        </p>  
                        
                    </div>
            </section>
            <div className='px-10 pb-[30px]'>
                <h4 className="mb-[30px] font-medium text-[30px] text-gray dark:text-cream sm:text-3xl">As suas principais influências são:</h4>
                <ul className='list-disc pl-6 *:font-sans *:text-xl *:text-light-gray dark:*:text-beige'>
                    <li className='mb-[15px]'>
                        Aromas Sofisticados: Em vez do coco pronunciado, ele tende a conferir notas delicadas de especiarias (cravo, pimenta, canela), baunilha, café, fumo e um característico toque tostado.
                    </li>
                    <li>
                        Estrutura e Longevidade: Sendo mais rico em taninos, ele transfere mais corpo, estrutura e complexidade ao vinho, aprimorando a sensação na boca e aumentando significativamente seu potencial de guarda.
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default MainOakBarrel;
