type CustomCardProps = {
    children: React.ReactNode
}

const darkMode: React.CSSProperties = {
    backgroundColor: '#292929'
}

export const CustomCard: React.FC<CustomCardProps> = ({children}) => {
    return <div className='card hoverable sticky-action' style={darkMode}>
        {children}
    </div>
}
