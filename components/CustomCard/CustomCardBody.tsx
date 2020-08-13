type CustomCardBodyProps = {
    startDate: string,
    endDate?: string,
    subtitle?: string,
    shortDesc: string
}

export const CustomCardBody: React.FC<CustomCardBodyProps> = ({ startDate, endDate, subtitle, shortDesc }) => {
    return <div>
        <div className='section'>
            {subtitle ? <p>{subtitle}</p> : <></>}
            <p><em>{startDate} - {endDate ? endDate : "Present"}</em></p>
        </div>
        <div>
            <p>{shortDesc}</p>
        </div>
    </div>
}