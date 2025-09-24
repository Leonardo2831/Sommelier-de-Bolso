import React from 'react'
import { Link } from 'react-router-dom';

const MosaicImage = ({item, classItem}) => {   
    const [hasHover, setHasHover] = React.useState(false);
    const [mousePositionItem, setMousePositionItem] = React.useState({x: 0, y: 0, element: <></>});
    const [mouseLeaveItem, setMouseLeaveItem] = React.useState(true);

    React.useEffect(() => {
        setHasHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches)
    }, []);

    function handleMouseOver(){
        const toolTip = mousePositionItem.element;
        // console.log(toolTip);
        
    }

    React.useEffect(() => {
        handleMouseOver();     
    }, [mousePositionItem]);

    function handleMouseLeave(){
        
    }

    React.useEffect(() => {
        handleMouseLeave();
    }, [mouseLeaveItem]);

    return (
        <Link 
            to={item.id} 
            className='block w-full mb-[10px] relative'
            onMouseOver={(event) => {
                hasHover && setMousePositionItem({
                    x: event.pageX, 
                    y: event.pageY, 
                    element: event.currentTarget,
            });
            }}
            onMouseLeave={() => hasHover && setMouseLeaveItem(false)}
        >
            <img 
                className={classItem} 
                src={item.url ? item.url : '/images/vitis-viniferas.png'} 
                alt={item.grapeName} 
            />
            <div 
                className='font-sans font-semibold text-xl bg-[rgba(64,64,64,0.8)]
                text-center text-white rounded-md px-5 py-3
                shadow-[0_0_2px_6px_rgba(64,64,64,0.8),0_0_0_2px_#C3A576_inset]
                absolute z-10 bottom-4 left-1/2 -translate-x-1/2'
            >
                {item.grapeName}
            </div>
        </Link>
    )
}

export default MosaicImage
