type CustomCardRevealProps = {
    title: string,
    description: string
}

const darkMode: React.CSSProperties = {
    backgroundColor: '#292929'
}

export const CustomCardReveal: React.FC<CustomCardRevealProps> = ({ title, description }) => {
    return <div className='card-reveal' style={darkMode}>
        <span className='card-title'>
            {title}
            <i className='material-icons right'>close</i>
        </span>
        <p>{description}</p>
    </div>
}