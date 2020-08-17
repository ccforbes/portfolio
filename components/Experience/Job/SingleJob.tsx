import React, { CSSProperties } from 'react'
import { Job } from '../Experience'
import { CustomCard, CustomCardThumbnail, CustomCardContent, CustomCardReveal } from '../../CustomCard/CustomMaterialCard'
import { useMediaQuery } from '@material-ui/core'


type SingleJobProps = {
    job: Job
}

const webImg: CSSProperties = {
    width: 225,
    height: 225
}

export const SingleJob: React.FC<SingleJobProps> = ({ job }) => {
    const matches = useMediaQuery("(max-width:690px)")
    const thumbnail: JSX.Element = matches ? 
        <CustomCardThumbnail reveal imgSrc={job.image} /> :
        <CustomCardThumbnail reveal imgSrc={job.image} styles={webImg} />
    const horizontal: boolean = !matches
    return <CustomCard horizontal={horizontal}>
        {thumbnail}
        <CustomCardContent
            reveal
            title={job.title}
            subtitle={job.employer}
            startDate={job.startDate}
            endDate={job.endDate}
            shortDesc={job.shortDesc} />
        <CustomCardReveal
            title={job.title}
            description={job.description} />
    </CustomCard>
}