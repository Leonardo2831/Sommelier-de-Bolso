import React from 'react';
import AppContext from '../../../contexts/AppContext';
import MosaicImage from './MosaicImage';
import Fuse from 'fuse.js';

const itemForPage = 9;

const MosaicGrapes = React.forwardRef(() => {
    const { allItems } = React.useContext(AppContext);

    const refMosaicContent = React.useRef(null);
    const refButton = React.useRef(null);

    const [page, setPage] = React.useState(1);
    const [finishItems, setFinishItems] = React.useState(true);
    const [visibleItems, setVisibleItems] = React.useState([]);

    let classItemMosaic;

    function choiceVisibleItems(){
        const newItems = allItems.slice((page - 1) * itemForPage, page * itemForPage);

        setVisibleItems([...visibleItems, ...newItems]); 

        return newItems;
    }

    React.useEffect(() => {        
        if(allItems.length > 0){
            const newItems = choiceVisibleItems();

            if(allItems.length <= newItems.length + visibleItems.length){
                setFinishItems(false);
            }
        }
    }, [page, allItems]);

    // input code
    const [phoneUsing, setPhoneUsing] = React.useState(false);
    const [valueInput, setValueInput] = React.useState('');
    const recognition = React.useRef(new (window.SpeechRecognition || window.webkitSpeechRecognition));

    React.useEffect(() => {
        if(allItems.length){
            const fuse = new Fuse(allItems, { keys: ['id', 'grapeName'], threshold: 0 });
            const resultsSearch = fuse.search(valueInput);

            const choiceGrapes = resultsSearch.map((grape) => grape.item);

            setVisibleItems(choiceGrapes);            
        }

        if(!valueInput.length) {
            choiceVisibleItems();
        }
    }, [valueInput]);

    // recognition audio on input
    React.useEffect(() => {
        if(!recognition.current){
            refMosaicContent.current.innerHTML = 
                '<p className="text-lg font-sans text-center text-gray dark:text-cream" >Usar microfone não é suportado neste navegador.</p>';
        }
    }, []);

    function audioClient(){        
        setPhoneUsing(true);

        recognition.current.lang = navigator.language;

        recognition.current.interimResults = false;

        recognition.current.maxAlternatives = 1;

        recognition.current.onresult = (event) => {
            const transcript = event.results[0][0].transcript;

            console.log(transcript);

            setValueInput(transcript);
            setPhoneUsing(false);
        };

        recognition.current.onerror = () => {
            if(refMosaicContent.current){
                refMosaicContent.current.innerHTML = 
                '<p className="text-lg font-sans text-center text-gray dark:text-cream" >Houve um erro, talvez não temos em nossa base de dados essa uva, pedimos desculpas</p>';
            }

            setPhoneUsing(false);
        };

        recognition.current.start();
    }
    
    function stopAudioClient(){        
        if(recognition.current){
            recognition.current.stop();
            setPhoneUsing(false);
        }
    }

    const classMicImage = 'cursor-pointer p-3 absolute right-0 top-0';

    return (
        <>
            <div className='flex flex-col justify-center items-center gap-[30px]'>
                <h2 className='text-center text-[40px] tracking-[0.4px] font-semibold text-gray dark:text-cream'>
                    Procure a uva que quer saber mais
                    <span className='text-gold text-[64px]'>.</span>
                </h2>
                <label 
                    htmlFor='searchGrape' 
                    className='relative rounded-md max-w-[440px] w-full bg-beige border-2 border-gold'
                >
                    {
                        !phoneUsing 
                        ? 
                        <img 
                            onClick={() => {
                                audioClient();
                            }}
                            className={classMicImage}
                            src="/icons/microphone.svg" 
                            alt="Microphone" 
                        />
                        :
                        <img 
                            onClick={() => stopAudioClient()}
                            src="/icons/stop-audio.svg" 
                            alt="Parar de gravar" 
                            className={classMicImage}    
                        />
                    }
                    <input 
                        onChange={(event) => setValueInput(event.currentTarget.value)}
                        value={valueInput ? valueInput : ''}
                        className='pl-4 pr-[48px] py-2 w-full font-sans text-xl' 
                        id='searchGrape' 
                        type="text" 
                        placeholder='Cabernet Suavignon...' 
                    />
                </label>
            </div>
            <div className='flex flex-col items-center'>
                <section
                    ref={refMosaicContent}
                    className="mt-[50px] columns-1 sm:columns-2 md:columns-3"
                >
                    {
                        visibleItems.map((item, index) => {
                            if(index % 7 == 0) 
                                classItemMosaic = 'w-full h-[500px] object-cover rounded-md';
                            else if(index % 5 == 0) 
                                classItemMosaic = 'w-full h-[400px] object-cover rounded-md';
                            else if(index % 3 == 0) 
                                classItemMosaic = 'w-full h-[300px] object-cover rounded-md';
                            else if(index % 2 == 0) 
                                classItemMosaic = 'w-full h-[200px] object-cover rounded-md';
                            else 
                                classItemMosaic = 'w-full h-[150px] object-cover rounded-md';


                            if(item.error){
                                return (
                                    <p 
                                        key={index} 
                                        className="font-sans font-semibold text-light-gray dark:text-beige"
                                    >
                                        {item.messageError}
                                    </p>
                                )
                            } else {
                                return <MosaicImage key={index} item={item} index={index} classItem={classItemMosaic} />;
                            }
                        })
                    }
                </section>
                {finishItems 
                    && 
                    <button 
                        ref={refButton}
                        className='mt-[50px] flex items-center gap-[15px] cursor-pointer
                        font-sans font-semibold bg-gold text-white text-[22px] py-3 px-6 rounded-md' 
                        onClick={() => setPage((prev) => prev + 1)}
                    >
                        <p>Veja mais opções</p>
                        <img className='w-7 h-7' src="/icons/arrow.svg" alt="Seta para baixo"/>
                    </button>
                }
            </div>
        </>
    )
});

export default MosaicGrapes;