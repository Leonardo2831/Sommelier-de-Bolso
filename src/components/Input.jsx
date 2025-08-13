import React from 'react';

const Input = ({ text, type, id, ...props }) => {
    const [value, setValue] = React.useState('');

    const refLabel = React.useRef(null);

    React.useEffect(() => {
        const classHasValue = 'input-hasValue';
        const classFocus = 'input-focusText';

        if(value !== ''){
            refLabel.current.classList.add(classHasValue);
            refLabel.current.classList.remove(classFocus);
        } else {  
            refLabel.current.classList.remove(classHasValue);
            refLabel.current.classList.add(classFocus);
        }
        
    }, [value]);

    return (
        <div className='relative'>
            <input 
                onChange={(event) => setValue(event.target.value)}
                className='input-item w-full font-sans font-medium 
                text-gray min-h-12 py-2 px-4 rounded-md 
                bg-cream dark:bg-beige 
                focus:outline-none focus:border-2 focus:border-gold' 
                type={type} name={id} 
                id={id} 
                {...props}
            />
            <label 
                ref={refLabel}
                className='input-focusText absolute z-20 left-4 top-2 font-semibold text-2xl text-light-gray' 
                htmlFor={id}>
                    {text}
            </label>
        </div>
    )
}

export default Input;