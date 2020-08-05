import React from 'react'
import styles from './*.module.css'
import { SingleJob } from './Job/SingleJob'

export type Job = {
    id: number
    title: string,
    employer: string,
    description: string,
    startDate: string,
    endDate?: string
}

const JOBS: Job[] = [
    {
        id: 3,
        title: "Teaching Assistant: Server-Side Development",
        employer: "University of Washington Information School",
        description: "",
        startDate: "March 2020",
        endDate: "June 2020",
    },
    {
        id: 2,
        title: "Software Engineer Co-op",
        employer: "AdaptiLab",
        description: "",
        startDate: "January 2020",
        endDate: "May 2020",
    },
    {
        id: 1,
        title: "Student Assistant: Software Developer",
        employer: "University of Washington Transporation Services",
        description: "",
        startDate: "October 2018",
        endDate: "March 2020",
    }
]

export const Experience: React.FC = () => {
    return <>
        <h4>My Experiences</h4>
        {JOBS.map(job => {
            return <SingleJob job={job} key={job.id} />
        })}
    </>
}
