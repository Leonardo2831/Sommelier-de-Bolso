// deve desestruturar, pois os valores são passados dentro de um objeto
const SubMenu = ({options}) => {
    return (
        <ul className="absolute top-full -left-full 
        flex flex-col items-center gap-3 w-[200px]
        p-3 rounded-lg
        bg-beige dark:bg-gray">           
            {options.map((option, index) => {  
                const {text, link, element} = option;

                return (
                    <li key={index} className='flex items-center justify-center'>
                        {
                            element ? element : link && text ? <a href={link}>{text}</a> : text
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default SubMenu;