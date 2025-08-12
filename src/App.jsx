import AppProvider from './contexts/AppProvider.jsx'

import Header from './components/Header.jsx';
import InitSection from './components/home/InitSection.jsx';

export default function App(){
    return (
        <AppProvider>
            <Header/>
            <main>
                <InitSection/>
            </main>
        </AppProvider>
    );
}