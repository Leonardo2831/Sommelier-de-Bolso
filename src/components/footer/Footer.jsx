import React from 'react';
import Logo from '../Logo';
import ContactInfo from './ContactInfo';

const Footer = () => {
    const listFooter = [
        {text: 'Terroir', link: '#'},
        {text: 'Barricas', link: '#'},
        {text: 'Aromas', link: '#'},
        {text: 'Uvas', link: '#'},
        {text: 'IA', link: '#'},
    ];

    return (
        <footer className='px-10 py-[30px] grid items-center justify-items-center grid-cols-1 gap-5 text-maple dark:text-gold sm:grid-cols-2 lg:grid-cols-3'>
            <a href="/index.html">
                <Logo visibleMenu={false}/>
            </a>
            <ul className='list-disc text-2xl font-medium *:mt-3 *:first:mt-0'>
                {
                    listFooter.map((listItem, index) => {
                        const {text, link} = listItem;

                        return (
                            <li key={index}>
                                <a href={link}>{text}</a>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    ), alt: 'Email', link: '#'}
                ]}
            />
            <div className='col-span-3 p-5 text-center font-sans text-sm font-medium'>
                <p>As imagens de vinhos exibidas neste site são propriedade das vinícolas originais e são utilizadas apenas para fins ilustrativos.</p>
            </div>
        </footer>
    )
}

export default Footer;