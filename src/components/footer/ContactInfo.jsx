const ContactInfo = ({ items }) => {

    return (
        <address className='not-italic grid items-center justify-center gap-8 *:flex *:items-center *:gap-3 
        sm:grid-cols-2 sm:gap-5 md:col-span-2 lg:col-span-1'>
            {
                items.map((itemContact, index) => {
                    
                    const {src, alt, link, element} = itemContact;
                    const classItem = "p-2 font-semibold text-xl text-maple hover:text-red dark:text-gold dark:hover:text-beige transition-colors duration-150 sm:text-[22px]";

                    if(element){
                        return (
                            <a key={index} href={link}
                                className={classItem}
                            >
                                {element}
                                <p>{alt}</p>
                            </a>
                        )
                    } else {
                        return (
                            <a key={index} href={link} target="_blank" 
                                className={classItem}
                            >
                                <img className='w-7 h-7' src={src} alt={alt}/>
                                <p>{alt}</p>
                            </a>
                        )   
                    }
                })
            }
        </address>
    )
}

export default ContactInfo;