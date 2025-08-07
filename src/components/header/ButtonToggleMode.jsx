import React from 'react';
import useAppContext from '../../hooks/useAppContext';

const ButtonToggleMode = () => {
    const { mode , setMode } = useAppContext();
    const classMode = 'dark';

    React.useEffect(() => {
        localStorage.mode = mode;

        const html = document.documentElement;
        html.classList.toggle(classMode);
    }, [mode]);

    const toggleMode = () => {
        setMode(mode === classMode ? '' : classMode);
    }

    return (
        <button 
            className="px-4 py-1 bg-gold text-white dark:bg-maple dark:text-cream" 
            onClick={toggleMode}
        >
            Clique aqui! {mode || 'light'}
        </button>
    )
}

export default ButtonToggleMode;