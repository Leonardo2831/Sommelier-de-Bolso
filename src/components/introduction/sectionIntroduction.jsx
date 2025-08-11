import React from 'react'

const sectionIntroduction = () => {
    const sectionImage = `/public/images/collection-sangiovese.png`;
    const altImage = ``;

    return (
        <section>
            <h1>Seja um Sommelier apenas com seu bolso<span className='text-red'>.</span></h1>
            <figure>
                <img src={sectionImage} alt={altImage}/>
            </figure>
        </section>

    )
}

export default sectionIntroduction