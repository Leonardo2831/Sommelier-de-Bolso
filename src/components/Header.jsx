import LinksNav from './header/LinksNav.jsx';
import Logo from './Logo.jsx';

const Header = () => {
    return ( 
        <header className='flex justify-between items-center text-maple dark:text-gold'>
            <nav>
                <LinksNav/>
            </nav>
            
            <Logo/>
        </header>
    )
}

export default Header;