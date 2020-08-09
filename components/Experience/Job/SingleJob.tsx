import styles from './SingleJob.module.css'
import React from 'react'
import { Job } from '../Experience'
import { Card, CardTitle, Icon } from 'react-materialize'

type SingleJobProps = {
    job: Job
}

export const SingleJob: React.FC<SingleJobProps> = ({ job }) => {
    return <>
        <Card
            className={'hoverable sticky-action extra-small ' + styles.job}
            closeIcon={<Icon>close</Icon>}
            horizontal
            header={
                <CardTitle image='/ischool.png' reveal waves='light' />
            }
            reveal={<p>job.description</p>}
            revealIcon={<Icon>more_vert</Icon>}
            title={job.title}
        >
            <p>{job.employer}</p>
            <p><em>{job.startDate} - {job.endDate ? job.endDate : "Present"}</em></p>
            <p>{job.description}</p>
        </Card>
    </>
}