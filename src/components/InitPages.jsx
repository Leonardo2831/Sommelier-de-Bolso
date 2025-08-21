import Video from './VideoBackground';
import ImageBackground from './ImageBackground';

const InitPages = (props) => {
    return (
        <section className='relative'>
            {props.optionVideo && <Video srcVideo={props.srcVideo} imageOption={props.imageOption} typeVideo={props.typeVideo} />}
            {props.optionImage && <ImageBackground srcImage={props.srcImage} altImage={props.altImage} />}
            <div className='bg-shadow-background absolute inset-0 flex items-center justify-center'>
                <h1 className='font-bold text-5xl text-cream sm:text-8xl lg:text-[148px]'>{props.title}</h1>
            </div>
        </section>
    )
}

export default InitPages