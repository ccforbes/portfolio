import { CSSProperties } from "react"

type CustomCardThumbnail = {
    reveal: boolean,
    imgSrc: string,
    styles?: CSSProperties
}

export const CustomCardThumbnail: React.FC<CustomCardThumbnail> = ({reveal=false, imgSrc, styles=undefined}) => {
    return <div className='card-image waves-effect waves-block waves-grey' style={styles}>
        <img className={reveal ? 'activator' : undefined} src={imgSrc} />
    </div>
}
