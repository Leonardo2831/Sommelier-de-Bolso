const GrapeTerroir = (props) => {
    return (
        <div className="flex flex-col gap-5 sm:flex-row">
            <div className="flex-2 sm:min-w-[330px]">
                <h4 className="mb-[15px] font-medium text-[30px] text-gray dark:text-cream sm:text-3xl">{props.nameGrape}</h4>
                <p className="font-sans text-xl text-light-gray dark:text-beige">{props.textGrape}</p>
            </div>
            <figure className="self-center max-w-[300px] min-w-[220px]">
                <img className="brightness-90 contrast-110 saturate-120 shadow w-full aspect-square rounded-lg" 
                    src={props.srcImage} alt={props.nameGrape} 
                />
            </figure>
        </div>
    )
}

export default GrapeTerroir;