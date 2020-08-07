import styles from './*.module.css'
import React from 'react'
import { Job } from '../Experience'
import { CollapsibleItem } from 'react-materialize'

type SingleJobProps = {
    job: Job
}

export const SingleJob: React.FC<SingleJobProps> = ({ job }) => {
    return <CollapsibleItem
            className='z-depth-1'
            header={<>
                <strong>{job.title}</strong>; {job.employer} (<em>{job.startDate} - {job.endDate ? job.endDate : 'Present'}</em>)
            </>}
            onSelect={()=>{}}>
            <p>{job.description}</p>
    </CollapsibleItem>
    
}