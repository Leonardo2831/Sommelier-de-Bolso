import React from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import AppContext from '../contexts/AppContext';

const itemForPage = 8;

const Mosaic = () => {

    const { allItems, setAllItems } = React.useContext(AppContext);
    const masonryContent = React.useRef(null);

    let [page, setPage] = React.useState(1);
    const [visibleItems, setVisibleItems] = React.useState([]);

    const [mouseOnItem, setMouseOnItem] = React.useState(false);

    React.useEffect(() => {
        const newItems = allItems.slice((page - 1) * itemForPage, page * itemForPage);
        setVisibleItems((prev) => [...prev, ...newItems]);
    }, [page, allItems]);

    return (
        <div className='flex flex-col items-center'>
            <Masonry
                ref={masonryContent}
                breakpointCols={{ default: 2, 768: 2, 480: 1 }}
                className="mt-[50px] flex w-full gap-4"
                columnClassName="masonry-column"
            >
                {
                    visibleItems.map((item, index) => {
                        if(item.error){
                            <p 
                                key={index} 
                                className="font-sans font-semibold text-light-gray dark:text-beige"
                            >
                                {item.messageError}
                            </p>
                        } else {
                            return (
                                <Link key={index} to={item.grapeName} className='relative bottom-3 translate-[-50%,-50%]'>
                                    <img src={item.url ? item.url : ''} alt={item.grapeName} />
                                    <div className='absolute z-10'>{item.grapeName}</div>
                                </Link>
                            );
                        }
                    })
                }
            </Masonry>
            <button 
                className='mt-[50px] flex items-center gap-[15px] font-sans font-semibold bg-gold text-white text-[22px] py-3 px-6 rounded-md' 
                onClick={() => setPage((prev) => prev + 1)}
            >
                <p>Veja mais opções</p>
                <img className='w-7 h-7' src="/icons/arrow.svg" alt="Seta para baixo"/>
            </button>
        </div>
    )
}

export default Mosaic;