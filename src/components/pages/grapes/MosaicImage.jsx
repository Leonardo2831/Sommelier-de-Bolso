import React from 'react'
import { Link } from 'react-router-dom';

const MosaicImage = ({item, classItem}) => {   
    const [hasHover, setHasHover] = React.useState(false);
    const [mouseInfos, setMouseInfos] = React.useState({x: 0, y: 0, height: 0});
    const [isHovering, setIsHovering] = React.useState(false);

    const toolTipRef = React.useRef(null);

    React.useEffect(() => {
        setHasHover(!('ontouchstart' in window))
    }, []);

    React.useEffect(() => {
        if(hasHover){
            const toolTip = toolTipRef.current;

            toolTip.style.top = `${mouseInfos.y - toolTip.clientHeight}px`; 
            toolTip.style.left = `${mouseInfos.x + 20}px`;
            toolTip.style.transform = 'translate(50%, -5px)';
        }
    }, [hasHover, isHovering, mouseInfos]);

    function onMouseMove(event){
        if(hasHover && toolTipRef.current) {
            setMouseInfos({
                x: event.pageX, 
                y: event.pageY,
                height: toolTipRef.current.offsetHeight,
            });
        }
    }

    function onMouseOver(){  
        if(hasHover && toolTipRef.current) setIsHovering(true);
    }

    function onMouseLeave(){
        if(hasHover && toolTipRef.current) setIsHovering(false);
    }

    return (
        <Link 
            to={item.id}
            className={`tooltip block w-full mb-[10px] ${!hasHover ? 'relative' : ''}`}
            onMouseMove={onMouseMove}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            <img 
                className={classItem} 
                src={item.url ? item.url : '/images/vitis-viniferas.png'} 
                alt={item.grapeName} 
            />
            <div 
                ref={toolTipRef}
                className={`h-fit w-fit max-w-[180px] font-sans font-semibold text-xl 
                ${!hasHover ? '!block' : ''}
                bg-[rgba(64,64,64,0.8)] text-center text-white rounded-md px-5 py-3
                shadow-[0_0_2px_6px_rgba(64,64,64,0.8),0_0_0_2px_#C3A576_inset]
                absolute z-10 bottom-4 left-1/2 -translate-x-1/2`}
            >
                {item.grapeName}
            </div>
        </Link>
    )
}

export default MosaicImage;