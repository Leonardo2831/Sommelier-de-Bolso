import React from 'react';
import { Link } from 'react-router-dom';
import ToolTip from '../../ToolTip';
import AppContext from '../../../contexts/AppContext';

const MosaicImage = ({item, classItem}) => {   
    const { hasHover } = React.useContext(AppContext);

    return (
        <Link 
            to={item.id}
            className={`tooltip block w-full mb-[10px] ${!hasHover ? 'relative' : ''}`}
        >
            <img 
                className={classItem} 
                src={item.url ? item.url : '/images/vitis-viniferas.png'} 
                alt={item.grapeName} 
            />
            <ToolTip item={item} hover={hasHover} />
        </Link>
    )
}

export default MosaicImage;