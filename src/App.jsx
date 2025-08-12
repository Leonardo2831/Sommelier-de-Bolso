import AppProvider from './contexts/AppProvider.jsx';
import { Analytics } from "@vercel/analytics/react"

import Header from './components/header/Header.jsx';
import Main from './components/home/Main.jsx';
import Footer from './components/footer/Footer.jsx';

export default function App(){
    return (
        <AppProvider>
            <Header/>
            <Main/>
            <Footer/>
            <Analytics/>
        </AppProvider>
    );
}