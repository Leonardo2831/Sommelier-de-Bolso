import Input from './../Input';

const FormIA = () => {
    return (
        <form 
            className='max-w-[700px] w-full p-[60px] rounded-md bg-beige dark:bg-gray'
            action="#" 
            onSubmit={(event) => event.preventDefault()}
        >
            <h3 className='text-center text-[40px] text-maple dark:text-gold font-semibold mb-[50px]'>Sommelier IA</h3>
            <section className='grid grid-cols-2 gap-x-[30px] gap-y-[50px] *:first:col-span-2'>
                <Input text="Digite sua dúvida" type="text" id="question" required />
                <Input text="Nome do vinho" type="text" id="wine"/>
                <Input text="Nome da uva" type="text" id="grape"/>
                <button className='col-span-2'>Consultar</button>
            </section>
        </form>
    )
}

export default FormIA;