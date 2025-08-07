import React from 'react';
import AppContext from '../contexts/AppContext.jsx';

export default function useAppContext() {
    const context = React.useContext(AppContext);
    
    if(context === undefined){
        throw new Error('Contexto não definido!');
    }

    return context;
}