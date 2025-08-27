const InfluencesBarrel = (props) => {
    return (
        <ul className='list-disc pl-6 grid gap-[15px] *:font-sans *:text-xl *:text-light-gray dark:*:text-beige'>
            {props.list.map((listItem) => {
                return <li dangerouslySetInnerHTML={{ __html: listItem }}></li>
            })}
        </ul>
    )
}

export default InfluencesBarrel;