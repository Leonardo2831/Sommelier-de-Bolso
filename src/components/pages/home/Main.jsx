import Head from '../../Head';
import ChoiceTypeWine from './ChoiceTypeWine';
import IaSection from './IaSection';
import InitSection from './InitSection';

const Main = () => {
    return (
        <main>
            <Head title="Sommelier de bolso | | Home" />
            <InitSection/>
            <ChoiceTypeWine/>
            <IaSection/>
        </main>
    )
}

export default Main;