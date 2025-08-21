import React from 'react';
import { infosSparkling, infosWhite, infosRose, infosRed, infosLiqueur } from '../../../../public/data/infosWines.js';

import SectionYouWine from './SectionYouWine.jsx';

const ChoiceTypeWine = () => {
    const [valueSection, setValueSection] = React.useState(0);
    const refButtonsSlide = React.useRef(null);

    React.useEffect(() => {
        setTimeout(() => {
            if(valueSection === 4){
                setValueSection(0);
            } else {
                setValueSection(valueSection + 1);
            }
        }, 60 * 1000);
    }, [valueSection]);

    React.useEffect(() => {
        const contentButtons = refButtonsSlide.current;
        const contentSections = contentButtons.previousElementSibling;

        const classButtonActive = 'activeSectionButton';
        const classAnimationSection = [
            'animate-showDown', 'animate-showLeft', 
            'animate-showTop', 'animate-showRight', 'animate-showDownDiagonal'
        ];
        const classFlex = 'flex';
        const classHidden = 'hidden';

        contentSections.classList.forEach((classItem) => {
            contentSections.classList.remove(classItem);
        });

        Array.from(contentButtons.children).forEach((button, index) => {
            button.classList.remove(classButtonActive);

            if(valueSection === index){
                button.classList.add(classButtonActive);
            }
        });

        Array.from(contentSections.children).forEach((section, index) => {
            section.classList.remove(classFlex);
            section.classList.add(classHidden);          

            if(valueSection === (index)){
                section.classList.add(classFlex);
                section.classList.remove(classHidden);
                contentSections.classList.add(classAnimationSection[index]);
            }
        });
    }, [valueSection]);

    return (
        <section id='choiceTypeWine' className='content-choiceYou p-10 sm:p-[60px]'>
            <h2 className='text-4xl font-semibold mb-10 text-maple dark:text-gold sm:text-[44px]'>Qual vinho faz o seu estilo?</h2>
            <div>
                <SectionYouWine 
                    srcImage={infosSparkling.wineSelected.image} 
                    altImage={infosSparkling.wineSelected.name} subTitleWine={infosSparkling.title} 
                    textWine={infosSparkling.text} listWine={infosSparkling.listCharacteristics}
                />
                <SectionYouWine 
                    srcImage={infosWhite.wineSelected.image} 
                    altImage={infosWhite.wineSelected.name} subTitleWine={infosWhite.title} 
                    textWine={infosWhite.text} listWine={infosWhite.listCharacteristics}
                />
                <SectionYouWine srcImage={infosRose.wineSelected.image} 
                    altImage={infosRose.wineSelected.name} subTitleWine={infosRose.title} 
                    textWine={infosRose.text} listWine={infosRose.listCharacteristics}
                />
                <SectionYouWine srcImage={infosRed.wineSelected.image} 
                    altImage={infosRed.wineSelected.name} subTitleWine={infosRed.title} 
                    textWine={infosRed.text} listWine={infosRed.listCharacteristics}
                />
                <SectionYouWine srcImage={infosLiqueur.wineSelected.image} 
                    altImage={infosLiqueur.wineSelected.name} subTitleWine={infosLiqueur.title} 
                    textWine={infosLiqueur.text} listWine={infosLiqueur.listCharacteristics}
                />
            </div>
            <nav 
                ref={refButtonsSlide}
                className='mt-[60px] flex items-center justify-center gap-4 
                *:w-5 *:h-5 *:rounded-full 
                *:bg-beige dark:*:bg-light-gray *:cursor-pointer'
            >
                <div id='section0' className='activeSectionButton' onClick={() => {
                    const newId = Number(refButtonsSlide.current.children[0].id.replace('section', ''));
                    setValueSection(newId);
                }}></div>
                <div id='section1' onClick={() => {
                    const newId = Number(refButtonsSlide.current.children[1].id.replace('section', ''));
                    setValueSection(newId);
                }}></div>
                <div id='section2' onClick={() => {
                    const newId = Number(refButtonsSlide.current.children[2].id.replace('section', ''));
                    setValueSection(newId);
                }}></div>
                <div id='section3' onClick={() => {
                    const newId = Number(refButtonsSlide.current.children[3].id.replace('section', ''));
                    setValueSection(newId);
                }}></div>
                <div id='section4' onClick={() => {
                    const newId = Number(refButtonsSlide.current.children[4].id.replace('section', ''));
                    setValueSection(newId);
                }}></div>
            </nav>
        </section>
    )
}

export default ChoiceTypeWine;