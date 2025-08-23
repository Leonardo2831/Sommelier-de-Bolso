const SectionListTerroir = (props) => {
    return (
        <section className="p-10">
            <h3 className="mb-[30px] font-semibold text-[32px] text-maple dark:text-gold">{props.title}</h3>
            <p className="mb-[20px] font-sans text-xl text-light-gray dark:text-beige">{props.text}</p>
            <ul className="list-disc pl-6 grid gap-[15px] font-sans text-light-gray dark:text-beige">
                {props.list.map((listItem, index) => {
                    return (
                        <li className="text-xl" key={index} dangerouslySetInnerHTML={{ __html: listItem }}></li>
                    )
                })}
            </ul>
            {   
            props.srcImage 
                && 
            <img className="mt-[30px] w-full rounded-md shadow" src={props.srcImage} alt={props.altImage} />
            }
        </section>
    )
}

export default SectionListTerroir;