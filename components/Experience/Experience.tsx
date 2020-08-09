import React from 'react'
import styles from './*.module.css'
import { SingleJob } from './Job/SingleJob'
import { Row, Col } from 'react-materialize'

export type Job = {
    id: number
    image?: string,
    title: string,
    employer: string,
    description: string,
    startDate: string,
    endDate?: string
}

const JOBS: Job[] = [
    {
        id: 3,
        image: "/ischool.png",
        title: "Teaching Assistant: Server-Side Development",
        employer: "University of Washington Information School",
        description: "Test description.",
        startDate: "March 2020",
        endDate: "June 2020",
    },
    {
        id: 2,
        image: "/ischool.png",
        title: "Software Engineer Co-op",
        employer: "AdaptiLab",
        description: "Test description.",
        startDate: "January 2020",
        endDate: "May 2020",
    },
    {
        id: 1,
        image: "/ischool.png",
        title: "Student Assistant: Software Developer",
        employer: "University of Washington Transporation Services",
        description: "Test description.",
        startDate: "October 2018",
        endDate: "March 2020",
    }
]

export const Experience: React.FC = () => {
    return <div className='container section'>
        <h4 className='center-align'>Experience</h4>
        <Row>
            {JOBS.map(job => {
                return <Col s={12}>
                    <SingleJob job={job} key={job.id}/>
                </Col>
            })}
        </Row>
        
    </div>
}
