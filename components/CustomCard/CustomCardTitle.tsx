type CustomCardTitleProps = {
    title: string
    reveal: boolean
}

export const CustomCardTitle: React.FC<CustomCardTitleProps> = ({ title, reveal=false }) => {
    const classes: string = 'card-title' + (reveal ? ' activator' : '')

    return <span className={classes}>
        {title}
        <i className="material-icons right">
            more_vert
        </i>
    </span>
}