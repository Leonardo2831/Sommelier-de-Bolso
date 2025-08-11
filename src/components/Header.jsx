import LinksNav from './header/LinksNav.jsx';
import Logo from './Logo.jsx';

const Header = () => {
    return ( 
        <header className='flex justify-between items-center gap-3 px-10 py-[30px] text-3xl font-medium text-maple dark:text-gold'>
            <nav>
                <LinksNav/>
            </nav>
            
            <Logo/>
        </header>
    )
}

export default Header;