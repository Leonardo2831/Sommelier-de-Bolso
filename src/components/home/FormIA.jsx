import React from 'react';
import Input from './../Input';

const FormIA = () => {
    const refButton = React.useRef(null);

    function requestIa(){
        const classLoading = 'loadingButton';

        refButton.current.classList.add(classLoading);
        refButton.current.innerHTML = '<p>Consultando</p><span></span><span></span><span></span>';
    }

    return (
        <form 
            className='max-w-[700px] w-full p-[30px] rounded-md bg-beige dark:bg-gray sm:p-[60px]'
            action="#"
            id='#IA' 
            onSubmit={(event) => {
                event.preventDefault();
                requestIa();
            }}
        >
            <h3 className='text-center text-[40px] text-maple dark:text-gold font-semibold mb-[50px]'>Sommelier IA</h3>
            <section className='grid grid-cols-1 gap-x-[30px] gap-y-[50px] [@media(min-width:480px)]:*:first:col-span-2 [@media(min-width:480px)]:grid-cols-2'>
                <Input text="Digite sua dúvida" type="text" id="question" required />
                <Input text="Vinho (opcional)" type="text" id="wine" data-optional={true}/>
                <Input text="Uva (opcional)" type="text" id="grape" data-optional={true}/>
                <button 
                    ref={refButton}
                    type='submit'
                    className='button-ia py-2 px-6 font-semibold text-2xl 
                    bg-gold dark:bg-maple text-white 
                    rounded-md cursor-pointer 
                    [@media(min-width:480px)]:col-span-2 [@media(min-width:480px)]:text-3xl'
                >
                    <p>Consultar</p>
                </button>
                <div className='content-responseIA [@media(min-width:480px)]:col-span-2'></div>
            </section>
        </form>
    )
}

export default FormIA;