const ContactInfo = ({ items }) => {

    return (
        <address className='not-italic grid grid-cols-2 items-center justify-center gap-7 *:flex *:items-center *:gap-3'>
            {
                items.map((itemContact, index) => {
                    
                    const {src, alt, link, element} = itemContact;
                    const classItem = "font-semibold text-xl text-maple hover:text-red dark:text-gold dark:hover:text-beige transition-colors duration-200";

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
                            <a key={index} href={link} 
                                className={classItem}
                            >
                                <img className='w-5 h-5' src={src} alt={alt}/>
                                <p>{alt}</p>
                            </a>
                        )   
                    }
                })
            }
        </address>
    )
}

export default ContactInfo
