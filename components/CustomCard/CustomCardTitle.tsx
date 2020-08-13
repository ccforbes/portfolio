type CustomCardTitleProps = {
    title: string
    reveal: boolean
}

export const CustomCardTitle: React.FC<CustomCardTitleProps> = ({ title, reveal=false }) => {
    const classes: string = 'card-title' + (reveal ? ' activator' : '')

    return <span className={classes}>
        <strong>{title}</strong>
    </span>
}