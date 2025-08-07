// deve desestruturar, pois os valores são passados dentro de um objeto
const SubMenu = ({options}) => {
    return (
        <ul>           
            {options.map((option, index) => {  
                const {text, link, element} = option;

                return (
                    <li key={index}>
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