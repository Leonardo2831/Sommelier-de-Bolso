const GrapeTerroir = (props) => {
    const classText = `${props.gridClassText || ''}`;
    const classImage = `${props.gridClassImage || ''} object-cover brightness-90 contrast-110 saturate-120 shadow w-full h-full rounded-lg`;
    
    return (
        <>
            <div className={classText}>
                <h4 className="mb-[15px] font-medium text-[30px] text-gray dark:text-cream sm:text-3xl">
                    {props.nameGrape}
                </h4>
                <p className="font-sans text-xl text-light-gray dark:text-beige">
                    {props.textGrape}
                </p>
            </div>

            <img className={classImage}
                src={props.srcImage} alt={props.nameGrape} 
            />
        </>
    )
}

export default GrapeTerroir;