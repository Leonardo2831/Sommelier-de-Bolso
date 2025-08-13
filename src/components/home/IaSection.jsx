import React from 'react';

const IaSection = () => {
    return (
        <section>
            <h1 className='text-center font-medium text-5xl text-maple dark:text-gold'>
                Não encontrou<span className='text-gold dark:text-red'>?</span>
            </h1>
            <h2 className='text-center font-light text-4xl text-gray dark:text-cream'>
                Consulte nossa <span className='font-regular text-red dark:text-gold'>IA</span> sommleier
            </h2>
            <form 
                className='max-w-[600px] p-[60px]'
                action="#" 
                onSubmit={(event) => event.preventDefault()}
            >
            </form>
        </section>
    )
}

export default IaSection;