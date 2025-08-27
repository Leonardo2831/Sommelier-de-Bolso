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
            <ul className='list-disc *:mt-1 *:first:mt-0'>
                {
                    listFooter.map((listItem, index) => {
                        const {text, link} = listItem;

                        return (
                            <li key={index} 
                                className='p-2 text-2xl font-medium 
                                text-maple dark:text-gold hover:text-red dark:hover:text-beige
                                transition-colors duration-150 cursor-pointer
                                sm:text-[28px]'
                            >
                                <Link to={link}>{text}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <ContactInfo 
                items={[
                    {src: '/icons/Github.png', alt: 'GitHub', link: 'https://github.com/Leonardo2831'},
                    {src: '/icons/Instagram.png', alt: 'Instagram', link: 'https://www.instagram.com/leonardo_reis_ferraz/?igshid=MGNiNDI5ZTU%3D'},
                    {src: '/icons/LinkedIn.png', alt: 'LinkedIn', link: 'https://www.linkedin.com/in/leonardo-ferraz-688095271/'},
                    {element: (
                        <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    ), alt: 'Email', link: 'mailto:leoferraz1818@gmail.com'}
                ]}
            />
            <div 
                className='pb-3 text-center font-sans text-sm font-medium 
                text-gray dark:text-beige sm:p-5 md:text-base md:col-span-2 lg:col-span-3 lg:p-0 lg:pt-5'
            >
                <p>As imagens de vinhos exibidas neste site são propriedade das vinícolas originais e são utilizadas apenas para fins ilustrativos.</p>
            </div>
        </footer>
    )
}

export default Footer;