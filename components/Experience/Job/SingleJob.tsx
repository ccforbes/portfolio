import React, { CSSProperties } from 'react'
import { Job } from '../Experience'
import { CustomCard, CustomCardThumbnail, CustomCardContent, CustomCardReveal } from '../../CustomCard/CustomMaterialCard'
import MediaQuery from 'react-responsive'


type SingleJobProps = {
    job: Job
}

// const jobImgStyles: CSSProperties = {
//     width: 225,
//     height: 225,
// }

// const mobileImg: CSSProperties = {
//     height: 'auto'
// }

const webImg: CSSProperties = {
    width: 225,
    height: 225
}

export const SingleJob: React.FC<SingleJobProps> = ({ job }) => {
    return <>
        <MediaQuery minDeviceWidth={691}>
            <CustomCard horizontal>
                <CustomCardThumbnail reveal imgSrc={job.image} styles={webImg} />
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
        </MediaQuery>
        <MediaQuery maxDeviceWidth={690}>
            <CustomCard>
                <CustomCardThumbnail reveal imgSrc={job.image} />
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
        </MediaQuery>
    </>
}