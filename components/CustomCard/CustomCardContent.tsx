import { CustomCardTitle } from './CustomCardTitle'
import { CustomCardBody } from './CustomCardBody'
import styles from './CustomCard.module.css'

type CustomCardContentProps = {
    title: string,
    reveal: boolean,
    startDate: string,
    endDate?: string,
    subtitle?: string,
    shortDesc: string
}

export const CustomCardContent: React.FC<CustomCardContentProps> = ({ title, reveal, startDate, endDate, subtitle, shortDesc }) => {
    return <div className={'card-content ' + styles.content}>
        <CustomCardTitle title={title} reveal={reveal} />
        <CustomCardBody 
            startDate={startDate} 
            endDate={endDate} 
            subtitle={subtitle} 
            shortDesc={shortDesc}/>
    </div>
}