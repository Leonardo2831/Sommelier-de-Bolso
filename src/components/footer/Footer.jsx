import React from 'react';
import Logo from '../Logo';

const Footer = () => {
    return (
        <footer className='grid grid-cols-1 text-maple dark:text-gold sm:grid-cols-2 lg:grid-cols-3'>
            <Logo visibleMenu={false}/>
            <ul className='list-disc'>
                <li>
                    <a href="#">Terroir</a>
                </li>
                <li>
                    <a href="#">Vinhos</a>
                </li>
                <li>
                    <a href="#">Barricas</a>
                </li>
                <li>
                <a href="#">Aromas</a>
                </li>
            </ul>
            <address>
                <figure>
                    <img src="" alt="Instagram" />
                </figure>
                <figure>
                    <img src="" alt="Github" />
                </figure>
                <figure>
                    <img src="" alt="Email" />
                </figure>
            </address>
            <div className='col-span-3 p-5 text-center font-sans text-sm font-medium'>
                <p>As imagens de vinhos exibidas neste site são propriedade das vinícolas originais e são utilizadas apenas para fins ilustrativos.</p>
            </div>
        </footer>
    )
}

export default Footer;