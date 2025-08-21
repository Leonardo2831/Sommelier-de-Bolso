import React from 'react';

const ImageBackground = ({ srcImage, altImage }) => {
    return (
        <img className='w-full' src={srcImage} alt={altImage} />
    )
}

export default ImageBackground;