// deve desestruturar, pois os valores são passados dentro de um objeto
const SubMenu = ({ options, refProp }) => {
    return (
        <ul ref={refProp} data-sub-menu className="shadow absolute top-full -left-full 
        flex flex-col items-center gap-3 w-[200px]
        p-3 rounded-b-lg
        bg-beige dark:bg-gray">           
            {options.map((option, index) => {  
                const {text, link, element} = option;

                return (
                    <li key={index} 
                    className='w-full p-2 flex items-center justify-center font-medium text-xl'>
                        {
                            element ? element : link && text ? <a className="w-full text-center font-medium" href={link}>{text}</a> : text
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default SubMenu;