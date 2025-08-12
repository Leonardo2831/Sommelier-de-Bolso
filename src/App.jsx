import AppProvider from './contexts/AppProvider.jsx';
import { Analytics } from "@vercel/analytics/react"

import Header from './components/Header.jsx';
import Main from './components/home/Main.jsx';

export default function App(){
    return (
        <AppProvider>
            <Header/>
            <Main/>
            <Analytics/>
        </AppProvider>
    );
}