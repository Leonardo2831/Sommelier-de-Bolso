import React from 'react';
import AppContext from './AppContext.jsx';

const AppProvider = ({ children }) => {
    // mode
    const [mode, setMode] = React.useState(() => {
        return localStorage.mode || '';
    });

    const [allItems, setAllItems] = React.useState([]);

    // request grapes
    React.useEffect(() => {
        async function requestImagesMasonry(){
            try {
                const responseGrapes = await fetch('/data/grapes.json');
                const dataGrapes = await responseGrapes.json();

                setAllItems(dataGrapes);
            } catch {
                setAllItems(allItems.push(
                    {
                        error: true, 
                        messageError: 'Houve um erro! Tente novamente mais tarde... Pode haver o caso de não haver sobre em nossa base de dados, pedimos desculpa.'
                    }
                ));
            }
        }

        requestImagesMasonry();
    }, []);

    // has hover
    const [hasHover, setHasHover] = React.useState(false);

    React.useEffect(() => {
        setHasHover(!('ontouchstart' in window))
    }, []);

    return (
        <AppContext.Provider value={{ mode , setMode, allItems, setAllItems, hasHover, setHasHover }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;