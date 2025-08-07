import React from 'react';
import AppContext from './AppContext.jsx';

const AppProvider = ({ children }) => {
    // mode
    const [mode, setMode] = React.useState(() => {
        return localStorage.mode || '';
    });

    // open sub-menu
    function openMenu({currentTarget}){
        if(currentTarget.children.length){
            currentTarget.children[currentTarget.children.length - 1].classList.toggle('hidden');
            currentTarget.children[currentTarget.children.length - 1].classList.toggle('flex');
        }
    }

    return (
        <AppContext.Provider value={{ mode , setMode, openMenu }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;