import LinksNav from './LinksNav.jsx';
import Logo from '../Logo.jsx';

const Header = () => {
    return ( 
        <header className='flex justify-between items-center gap-3 px-10 py-[30px] max-sm:px-[30px]'>
            <nav>
                <LinksNav/>
            </nav>
            
            <Logo visibleMenu={true}/>
        </header>
    )
}

export default Header;