import React from "react";
import Header from './components/Header.jsx';

export default function App(){
    const [mode, setMode] = React.useState(() => {
        return localStorage.mode || '';
    });

    React.useEffect(() => {
        localStorage.mode = mode;

        const html = document.documentElement;
        html.classList.toggle('dark');
    }, [mode]);

    const toggleMode = () => {
        setMode(mode === 'dark' ? '' : 'dark');
    }

    return (
        // <> necessário, pois o componente retorna teóricamente 1 item apenas, logo é necessário retornar o elemento pai.
        <>
            <Header></Header>
            <button 
                onClick={toggleMode} 
                className="px-4 py-1 bg-gold text-white cursor-pointer dark:bg-maple dark:text-beige">Clique aqui! modo: {mode || 'light'}
            </button>
        </>
    );
}