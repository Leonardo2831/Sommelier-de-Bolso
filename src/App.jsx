import React from "react";
import AppProvider from './contexts/AppProvider.jsx'
import useAppContext from "./hooks/useAppContext.jsx";

import Header from './components/Header.jsx';
import ButtonToggleMode from "./components/header/ButtonToggleMode.jsx";

export default function App(){
    return (
        <AppProvider>
            <Header/>
            <ButtonToggleMode/>
        </AppProvider>
    );
}