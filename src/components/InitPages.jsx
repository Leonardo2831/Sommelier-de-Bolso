import React from 'react';

import Video from './VideoBackground';
import ImageBackground from './ImageBackground';

const InitPages = () => {
    return (
        <section className='relative'>
            {props.optionVideo && <Video srcVideo={props.srcVideo} imageOption={props.imageOption} typeVideo={props.typeVideo} />}
            {props.optionImage && <ImageBackground srcImage={props.srcImage} altImage={props.altImage} />}
            <div className='bg-shadow-background absolute inset-0 flex items-center justify-center'>
                <h1 className='font-bold text-8xl'>{props.title}</h1>
            </div>
        </section>
    )
}

export default InitPages