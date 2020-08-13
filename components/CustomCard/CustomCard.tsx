type CustomCardProps = {
    children: React.ReactNode,
    horizontal?: boolean,
    size?: string
}

const darkMode: React.CSSProperties = {
    backgroundColor: '#292929'
}

export const CustomCard: React.FC<CustomCardProps> = ({children, horizontal, size}) => {
    const classes: string = 'card hoverable sticky-action' + (size ? ' ' + size : '')
                            + (horizontal ? ' horizontal' : '')

    return <div className={classes} style={darkMode}>
        {children}
    </div>
}
