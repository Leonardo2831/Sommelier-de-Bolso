import useAppContext from '../../hooks/useAppContext.jsx';
import SubMenu from '../SubMenu.jsx';

const LinksNav = () => {
    const { openMenu } = useAppContext();

    return (
        <ul className='flex flex-wrap items-center gap-5 *:p-2 *:cursor-pointer'>
            <li>
                <a href="/index.html">Home</a>
            </li>
            <li onClick={openMenu} className='relative'>
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