import React from 'react';

const VideoBackground = ({ optionImage, srcVideo, typeVideo }) => {
    const refVideo = React.useRef(null);

    React.useEffect(() => {
        if(refVideo){
            refVideo.current.playbackRate = 0.7;
        }
    }, []);

    return (
        <video ref={refVideo} 
            className='w-full'
            poster={optionImage} 
            loop muted autoPlay
        >
            <source src={srcVideo} type={typeVideo} />
        </video>
    )
}

export default VideoBackground;