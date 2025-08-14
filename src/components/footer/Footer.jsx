import Logo from '../Logo';
import ContactInfo from './ContactInfo';
import { Link } from 'react-router-dom';

const Footer = ({ listFooter }) => {
    return (
        <footer 
            className='px-10 py-5 
            grid items-center justify-items-center grid-cols-1 gap-10 sm:gap-5 
            md:grid-cols-2 lg:grid-cols-3'
        >
            <Link to="/">
                <Logo visibleMenu={false}/>
            </Link>
            <ul className='list-disc *:mt-3 *:first:mt-0'>
                {
                    listFooter.map((listItem, index) => {
                        const {text, link} = listItem;

                        return (
                            <li key={index} 
                                className='text-2xl font-medium 
                                text-maple dark:text-gold hover:text-red dark:hover:text-beige
                                transition-colors duration-150'
                            >
                                <Link to={link}>{text}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <ContactInfo 
                items={[
                    {src: '/icons/Github.png', alt: 'GitHub', link: '#'},
                    {src: '/icons/Instagram.png', alt: 'Instagram', link: '#'},
                    {src: '/icons/LinkedIn.png', alt: 'LinkedIn', link: '#'},
                    {element: (
                        <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    ), alt: 'Email', link: '#'}
                ]}
            />
            <div 
                className='p-3 text-center font-sans text-sm font-medium 
                text-gray dark:text-beige md:col-span-2 lg:col-span-3 lg:p-0 lg:pt-5'
            >
                <p>As imagens de vinhos exibidas neste site são propriedade das vinícolas originais e são utilizadas apenas para fins ilustrativos.</p>
            </div>
        </footer>
    )
}

export default Footer;