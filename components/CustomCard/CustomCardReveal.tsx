type CustomCardRevealProps = {
    title: string,
    description: string[]
}

const reveal: React.CSSProperties = {
    backgroundColor: '#292929',
    overflowY: 'auto'
}

export const CustomCardReveal: React.FC<CustomCardRevealProps> = ({ title, description }) => {
    return <div className='card-reveal' style={reveal}>
        <span className='card-title'>
            <strong>{title}</strong>
            <i className='material-icons right'>close</i>
        </span>
        <div className='section'>
            {description.map((paragraph: string, index: number) => {
                return <p key={index}>{paragraph}</p>
            })}
        </div>
    </div>
}