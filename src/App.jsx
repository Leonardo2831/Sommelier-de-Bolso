import AppProvider from './contexts/AppProvider.jsx';
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header.jsx';
import Main from './components/home/Main.jsx';
import Footer from './components/footer/Footer.jsx';

export default function App(){
    return (
        <BrowserRouter>
            <AppProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>} />
                </Routes>
                <Footer listFooter={[
                        {text: 'Terroir', link: 'Terroir'},
                        {text: 'Uvas', link: 'Uvas'},
                        {text: 'Barricas', link: 'Barricas'},
                        {text: 'Aromas', link: 'Aromas'},
                    ]}
                />
                <Analytics/>
            </AppProvider>
        </BrowserRouter>
    );
}