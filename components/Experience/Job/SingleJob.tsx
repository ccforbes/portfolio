import styles from './*.module.css'
import React from 'react'
import { Job } from '../Experience'
import { CollapsibleItem } from 'react-materialize'

type SingleJobProps = {
    job: Job
}

export const SingleJob: React.FC<SingleJobProps> = ({ job }) => {
    return <CollapsibleItem
            header={job.title}
            onSelect={()=>{}}>
            <p>{job.employer}</p>
            <p>{job.description}</p>
            <p>{job.startDate} - {job.endDate ? job.endDate : 'Present'}</p>
    </CollapsibleItem>
    
}