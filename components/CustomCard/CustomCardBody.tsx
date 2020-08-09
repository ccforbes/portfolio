type CustomCardBodyProps = {
    startDate: string,
    endDate?: string,
    subtitle?: string,
    shortDesc: string
}

export const CustomCardBody: React.FC<CustomCardBodyProps> = ({ startDate, endDate, subtitle, shortDesc}) => {
    return <>
        {subtitle ? <p>subtitle</p> : <></>}
        <p><em>{startDate} - {endDate ? endDate : "Present"}</em></p>
        <p>{shortDesc}</p>
    </>
}