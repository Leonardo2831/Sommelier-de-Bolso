import AppProvider from './contexts/AppProvider.jsx';
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header.jsx';

import Main from './components/pages/home/Main.jsx';
import MainOakBarrel from './components/pages/oakBarrel/MainOakBarrel.jsx';
import MainGrapes from './components/pages/grapes/MainGrapes';
import MainBouquet from './components/pages/bouquet/MainBouquet';
import MainTerroir from './components/pages/terroir/MainTerroir';

import Footer from './components/footer/Footer.jsx';

export default function App(){
    return (
        <BrowserRouter>
            <AppProvider>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main/>} />
                    <Route path='Terroir' element={<MainTerroir/>} />
                    <Route path='Uvas' element={<MainGrapes/>} />
                    <Route path='Barricas' element={<MainOakBarrel/>} />
                    <Route path='Aromas' element={<MainBouquet/>} />
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