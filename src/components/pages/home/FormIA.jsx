import React from 'react';
import showdown from 'showdown';

import Input from './../../Input';

const FormIA = () => {
    const refButton = React.useRef(null);
    const refInputQuestion = React.useRef(null);
    const refInputWine = React.useRef(null);
    const refInputGrape = React.useRef(null);

    const converter = new showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
        // código para criar uma div antes de gerar a tabela
        extensions: [
            function () {
                return [{
                    type: 'output',
                    filter: function (text) {
                        return text.replace(/<table>([\s\S]*?)<\/table>/g, '<div class="table-responsive scroll"><table>$1</table></div>');
                    }
                }];
            }
        ]
    });

    async function initRequestIa(){
        const button = refButton.current;
        const classLoading = 'loadingButton';
        const classHidden = 'hidden';

        button.classList.add(classLoading);
        button.innerHTML = '<p>Consultando</p><span></span><span></span><span></span>';

        button.nextElementSibling.classList.add(classHidden);
        button.nextElementSibling.innerHTML = '';

        try {
            const inputQuestion = refInputQuestion.current;
            const inputWine = refInputWine.current;
            const inputGrape = refInputGrape.current;

            const url = `/api/requestGemini`;
            const objFetch = {
                method: 'POST',
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    input: inputQuestion.value,
                    contextWine: inputWine.value,
                    contextGrape: inputGrape.value,
                }),
            }

            const responseGemini = await fetch(url , objFetch);
            const dataGemini = await responseGemini.json();
            const messageGemini = dataGemini.message;

            const htmlMessageGemini = converter.makeHtml(messageGemini);

            button.nextElementSibling.classList.remove(classHidden);
            button.nextElementSibling.innerHTML = htmlMessageGemini;
        } catch {
            button.nextElementSibling.classList.remove(classHidden);
            button.nextElementSibling.innerHTML = 
                '<p class="font-sans text-xl">Houve um <b className="font-medium">erro</b>, tente novamente mais tarde!</p>';
        } finally {
            button.classList.remove(classLoading);
            button.textContent = 'Consultar';
        }
    }

    return (
        <form 
            className='max-w-[800px] w-full p-[30px] rounded-md bg-beige dark:bg-gray sm:p-[60px]'
            action="#"
            id='#IA' 
            onSubmit={(event) => {
                event.preventDefault();
                initRequestIa();
            }}
        >
            <h3 className='text-center text-[40px] text-maple dark:text-gold font-semibold mb-[50px]'>Sommelier IA</h3>
            <section 
                className='grid grid-cols-1 gap-x-[30px] gap-y-[50px]
                [@media(min-width:480px)]:*:first:col-span-2 
                [@media(min-width:480px)]:grid-cols-2
                sm:gap-y-[54px]'
            >
                <Input ref={refInputQuestion} text="Digite sua dúvida" type="text" id="question" required />
                <Input ref={refInputWine} text="Vinho (opcional)" type="text" id="wine" data-optional={true}/>
                <Input ref={refInputGrape} text="Uvas (opcional)" type="text" id="grape" data-optional={true}/>
                <button 
                    ref={refButton}
                    type='submit'
                    className='button-ia uppercase py-3 px-6 font-semibold text-2xl 
                    bg-gold dark:bg-maple text-white 
                    rounded-md cursor-pointer hover:opacity-90 transition-all duration-150
                    [@media(min-width:480px)]:col-span-2 [@media(min-width:480px)]:text-3xl'
                >
                    <p>Consultar</p>
                </button>
                <div 
                    className='content-responseIA hidden scroll px-4 pb-4 text-gray dark:text-cream 
                    max-h-[500px] overflow-y-auto
                    [@media(min-width:480px)]:col-span-2'
                ></div>
            </section>
        </form>
    )
}

export default FormIA;