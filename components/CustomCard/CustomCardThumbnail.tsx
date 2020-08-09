type CustomCardThumbnail = {
    reveal: boolean,
    imgSrc: string
}

export const CustomCardThumbnail: React.FC<CustomCardThumbnail> = ({reveal=false, imgSrc}) => {
    return <div className='card-image waves-effect waves-block waves-grey'>
        <img className={reveal ? 'activator' : undefined} src={imgSrc} />
    </div>
}
