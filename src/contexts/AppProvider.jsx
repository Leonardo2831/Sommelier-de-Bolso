import React from 'react';
import AppContext from './AppContext.jsx';

const AppProvider = ({ children }) => {
    const [mode, setMode] = React.useState(() => {
        return localStorage.mode || '';
    });

    return (
        <AppContext.Provider value={{ mode , setMode }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;