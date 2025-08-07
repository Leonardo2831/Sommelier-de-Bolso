import SubMenu from '../SubMenu.jsx';

const LinksNav = () => {
    return (
        <ul>
            <li>Home</li>
            <li>
                <p>Vinhos</p>
                <SubMenu 
                    options={
                        [
                            { text: 'Barricas', link: '#link1'}, 
                            { text: 'Aromas', link: '#link2'}
                        ]
                    } 
                />
            </li>
            <li>
                <a href="#">Uvas</a>
            </li>
            <li>
                <a href="#">Terroir</a>
            </li>
        </ul>
    )
}

export default LinksNav;