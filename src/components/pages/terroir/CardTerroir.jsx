const CardTerroir = ({ text, srcImage, altImage }) => {
    return (
        <figure 
            className='relative w-[125px] h-[125px] 
            [media@(min-width:480px)]:w-[150px] [media@(min-width:480px)]:h-[150px]'>
            <img className="w-full rounded-md" src={srcImage} alt={altImage} />
            <p 
                className='absolute inset-x-0 bottom-0 rounded-b-md px-[10px] py-[5px] 
                text-base text-center font-sans font-semibold 
                bg-gold text-white sm:text-xl'
            >
                {text}
            </p>
        </figure>
    )
}

export default CardTerroir;