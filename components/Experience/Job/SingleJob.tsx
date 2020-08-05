import styles from './*.module.css'
import React from 'react'
import { Job } from '../Experience'

type SingleJobProps = {
    job: Job
}

export const SingleJob: React.FC<SingleJobProps> = ({ job }) => {
    return <>
        <p>{job.title}</p>
        <p>{job.employer}</p>
        <p>{job.startDate} - {job.endDate ? job.endDate : "Present"}</p>
        <p>{job.description}</p>
    </>
}