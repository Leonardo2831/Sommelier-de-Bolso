const SectionYouWine = ({ srcImage, altImage, subTitleWine, textWine, listWine }) => {
    return (
        <section>
            <figure>
                <img src={srcImage} alt={altImage} />
            </figure>
            <div>
                <h3 className='text-[32px] text-maple dark:text-gold'>{subTitleWine}</h3>
                <p className='text-base text-gray dark:text-beige'>{textWine}</p>
                <h4>Características</h4>
                <ul className='list-disc *:text-base *:text-gray dark:*:text-beige'>
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