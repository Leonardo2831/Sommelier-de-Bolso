import Head from '../../Head';
import ChoiceTypeWine from './ChoiceTypeWine';
import IaSection from './IaSection';
import InitSection from './InitSection';

const Main = () => {
    const description = 'Veja sobre vinhos de forma simples e interativa com o Sommelier de Bolso e seja seu próprio sommelier. Explore efeitos das barricas, tipos de uva, aromas, terroir e conte com a ajuda de uma IA para entender melhor cada detalhe do mundo do vinho.';

    return (
        <main>
            <Head titleText="Sommelier de bolso" description={description} />
            <InitSection/>
            <ChoiceTypeWine/>
            <IaSection/>
        </main>
    )
}

export default Main;