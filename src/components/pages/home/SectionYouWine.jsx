const SectionYouWine = ({ srcImage, altImage, subTitleWine, textWine, listWine }) => {
    return (
        <section className="items-center gap-10 flex-col sm:flex-row sm:justify-center">
            <figure 
                className='relative overflow-hidden h-fit flex-1
                flex items-center justify-center'
            >
                <img 
                    className='-rotate-[7deg] w-full max-w-[250px] aspect-[2/3] object-contain'
                    src={srcImage} 
                    alt={altImage} 
                />
            </figure>
            <div className="flex-1">
                <h3 className='mb-4 font-semibold text-[32px] text-maple dark:text-gold sm:text md:text-[40px]'>{subTitleWine}</h3>
                <p className='font-sans text-lg text-gray dark:text-beige md:text-xl'>{textWine}</p>
                <h4 className="my-6 font-medium text-2xl text-black dark:text-beige md:text-3xl">Características</h4>
                <ul
                    className='list-disc list-inside 
                    *:first:m-0 *:mt-[10px] *:font-sans
                    *:text-base *:text-gray dark:*:text-beige
                    sm:*:text-lg md:*:text-xl'
                >
                    {listWine.map((text, index) => {
                        return (
                            <li key={index}>
                                {text}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default SectionYouWine;