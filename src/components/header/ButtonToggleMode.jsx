import React from 'react';
import useAppContext from '../../hooks/useAppContext';

const ButtonToggleMode = () => {
    const { mode , setMode } = useAppContext();
    const classMode = 'dark';

    console.log(mode);
    console.log(localStorage.mode);

    React.useEffect(() => {
        localStorage.mode = mode;
        const html = document.documentElement;

        if(mode === 'dark'){
            html.classList.remove(classMode);
        } else {
            html.classList.add(classMode);
        }
    }, [mode]);

    const toggleMode = ({target}) => {
        if(target.checked){
            setMode(classMode);
        } else {
            setMode('');
        }
    }

    return (
        <label 
            htmlFor="toggleMode"
            className='px-4 py-2 bg-gold rounded-lg text-white dark:bg-maple dark:text-cream'
        >
            <input 
                onClick={toggleMode}
                className='hidden'
                type="checkbox" 
                name='toggleMode' 
                id='toggleMode' 
            />
            teste
        </label>
    )
}

export default ButtonToggleMode;