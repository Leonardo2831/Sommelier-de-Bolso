import React from 'react';
import AppContext from '../contexts/AppContext';
import MosaicImage from './pages/grapes/MosaicImage';

const itemForPage = 8;

const Mosaic = () => {

    const { allItems } = React.useContext(AppContext);
    const masonryContent = React.useRef(null);

    let [page, setPage] = React.useState(1);
    const [visibleItems, setVisibleItems] = React.useState([]);

    let classItemMasonry;

    React.useEffect(() => {
        const newItems = allItems.slice((page - 1) * itemForPage, page * itemForPage);
        setVisibleItems((prev) => [...prev, ...newItems]);
    }, [page, allItems]);

    return (
        <div className='flex flex-col items-center'>
            <section
                ref={masonryContent}
                className="mt-[50px] columns-1 sm:columns-2 md:columns-3"
            >
                {
                    visibleItems.map((item, index) => {
                        if(index % 7 == 0) 
                            classItemMasonry = 'w-full h-[500px] object-cover rounded-md';
                        else if(index % 5 == 0) 
                            classItemMasonry = 'w-full h-[400px] object-cover rounded-md';
                        else if(index % 3 == 0) 
                            classItemMasonry = 'w-full h-[300px] object-cover rounded-md';
                        else if(index % 2 == 0) 
                            classItemMasonry = 'w-full h-[200px] object-cover rounded-md';
                        else 
                            classItemMasonry = 'w-full h-[150px] object-cover rounded-md';


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
                            return <MosaicImage key={index} item={item} index={index} classItem={classItemMasonry} />;
                        }
                    })
                }
            </section>
            <button 
                className='mt-[50px] flex items-center gap-[15px] cursor-pointer
                font-sans font-semibold bg-gold text-white text-[22px] py-3 px-6 rounded-md' 
                onClick={() => setPage((prev) => prev + 1)}
            >
                <p>Veja mais opções</p>
                <img className='w-7 h-7' src="/icons/arrow.svg" alt="Seta para baixo"/>
            </button>
        </div>
    )
}

export default Mosaic;