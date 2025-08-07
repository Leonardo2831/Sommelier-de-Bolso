import AppProvider from './contexts/AppProvider.jsx'

import Header from './components/Header.jsx';

export default function App(){
    return (
        <AppProvider>
            <Header/>
        </AppProvider>
    );
}