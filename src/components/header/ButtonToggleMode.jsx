import React from 'react';
import useAppContext from '../../hooks/useAppContext';

const ButtonToggleMode = () => {
    const { mode , setMode } = useAppContext();

    React.useEffect(() => {
        localStorage.mode = mode;

        const html = document.documentElement;

        if (mode === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [mode]);

    const toggleMode = () => {
        setMode(mode === 'dark' ? '' : 'dark');
    }

    return (
        <button 
            className="px-4 py-1 bg-gold text-white dark:bg-maple dark:text-cream" 
            onClick={toggleMode}
        >
            Clique aqui! {mode || `light`}
        </button>
    )
}

export default ButtonToggleMode;