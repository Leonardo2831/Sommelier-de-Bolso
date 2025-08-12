import LinksNav from './header/LinksNav.jsx';
import Logo from './Logo.jsx';

const Header = () => {
    return ( 
        <header 
            className='flex justify-between items-center gap-3 px-10 py-[30px] 
            font-medium text-maple dark:text-gold max-sm:px-[30px]'
        >
            <nav>
                <LinksNav/>
            </nav>
            
            <Logo/>
        </header>
    )
}

export default Header;