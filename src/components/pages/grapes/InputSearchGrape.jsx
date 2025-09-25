import React from 'react';

const InputSearchGrape = () => {
    return (
        <label 
            htmlFor='searchGrape' 
            className='relative rounded-md max-w-[440px] w-full bg-beige border-2 border-gold'
        >
            <img className='absolute p-3 right-0 top-0' src="/icons/microphone.svg" alt="Microphone" />
            <input 
                className='pl-4 pr-[48px] py-2 w-full font-sans text-xl' 
                id='searchGrape' 
                type="text" 
                placeholder='Cabernet Suavignon...' 
            />
        </label>
    )
}

export default InputSearchGrape;