import { Link } from "../types"

type CustomCardActionsProps = {
    links: Link[]
}

const darkModeLink: React.CSSProperties = {
    color: '#0288d1'
}

export const CustomCardActions: React.FC<CustomCardActionsProps> = ({ links }) => {
    return <div className='card-action'>
        {links.map(link => {
            return <a style={darkModeLink} href={link.link}>{link.name}</a>
        })}
    </div>
}