import FormIA from './FormIA';

const IaSection = () => {
    return (
        <section className='flex flex-col items-center p-10 sm:p-[60px]'>
            <h1 className='text-center font-medium text-5xl text-maple dark:text-gold mb-5'>
                Não encontrou<span className='text-gold dark:text-red'>?</span>
            </h1>
            <h2 className='text-center font-light text-4xl text-gray dark:text-cream mb-[30px]'>
                Consulte nossa <span className='font-regular text-red dark:text-gold'>IA</span> sommleier
            </h2>
            <FormIA/>
        </section>
    )
}

export default IaSection;