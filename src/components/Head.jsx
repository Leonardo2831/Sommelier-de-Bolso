import React from 'react';

const Head = (props) => {
    React.useEffect(() => {
        document.title = props.titleText ? props.titleText : 'Sommelier de Bolso';

        if (props.description) {
            const metaDescription = document.querySelector('meta[name="description"]');
            
            if (metaDescription) {
                metaDescription.setAttribute('content', props.description);
            } else {
                const meta = document.createElement('meta');

                meta.name = 'description';
                meta.content = props.description;
                document.head.appendChild(meta);
            }
        }

    }, [props]);

    return <></>;
}

export default Head;