import React from 'react';
import useAppContext from '../../hooks/useAppContext';

const ButtonToggleMode = () => {
    const { mode , setMode } = useAppContext();
    const classMode = 'dark';

    React.useEffect(() => {
        localStorage.mode = mode;
        const html = document.documentElement; 

        if(mode === 'dark'){
            html.classList.add(classMode);
        } else {
            html.classList.remove(classMode);
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
            className='relative p-1 w-[100px] h-[33px]
            rounded-2xl bg-gold text-white dark:bg-maple dark:text-cream'
        >
            <input 
                onChange={toggleMode}
                className='hidden'
                type="checkbox" 
                name='toggleMode' 
                id='toggleMode'
                checked={mode === 'dark' ? true : false}
            />
            <div data-mode className='absolute left-1 top-1 transition duration-400 rounded-full w-[25px] h-[25px] bg-white dark:bg-cream'></div>
        </label>
    )
}

export default ButtonToggleMode;