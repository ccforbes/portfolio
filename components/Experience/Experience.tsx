import React from 'react'
//import styles from './*.module.css'
import { SingleJob } from './Job/SingleJob'
import { Row, Col } from 'react-materialize'

export type Job = {
    id: number
    image: string,
    title: string,
    employer: string,
    shortDesc: string
    description: string[],
    startDate: string,
    endDate?: string
}

const JOBS: Job[] = [
    {
        id: 3,
        image: "/ischool.png",
        title: "Teaching Assistant: Server-Side Development",
        employer: "University of Washington Information School",
        shortDesc: "TA'ed for a class that taught server-side web development skills.",
        description: ["I was one of the Undergraduate Teaching Assistants " +
                     "for INFO 441: Server-Side Development for Spring 2020. This is a course " +
                     "offered by the Informatics program at the University of " + 
                     "Washington.",
                    "This course focuses a lot on server-side web development. The version " +
                    "of the course I assisted in utilized AWS EC2 for the cloud service and " +
                    "infrastructure, Docker to containerize programs, Go and Node.js for writing " +
                    "REST API services, MySQL, MongoDB, and Redis for databases, and websockets " +
                    "for asynchronous messaging.",
                    "My main function was to help students in understanding the concepts taught " +
                    "in class and help them apply these skills to their assignments and final project. " +
                    "The TA and I recorded videos for lab sections and wrote up tutorials to help break down " +
                    "difficult topics within the class. I held office hours to answer questions and help "+
                    "debug assignment, and conducted code reviews while grading programming concepts.",
                    "This course is notoriously difficult within our program because it covers a variety of " +
                    "topics, from Back End Development, DevOps and Infrastructure. However, the course " +
                    "I assisted had a higher performance than past courses offerings. I was able to find flaws " +
                    "that I noticed when I took the course, and helped break down topics that are difficult " +
                    "to understand. The instruction team also removed some assignments that took away from " +
                    "understanding the core fundamentals."],
        startDate: "March 2020",
        endDate: "June 2020",
    },
    {
        id: 2,
        image: "/adaptilab.png",
        title: "Software Engineer Co-op",
        employer: "AdaptiLab",
        shortDesc: "Worked on AdaptiLab's project \"HireAssist.ML\" for my co-op and capstone.",
        description: ["I got to work with AdaptiLab as a co-op for Winter and Spring of 2020. This "+
                    "was my Capstone project for the Informatics program.",
                    "Our aim with HireAssist.ML was to streamline and automate the job application " +
                    "process by creating a Chrome Extension that will recommend jobs for you to apply, " +
                    "and autofill repetitive information on online job applications.",
                    "I was involved throughout the entire software development life cycle process, from " +
                    "conducting user research, to designing user stories and wireframes. Ultimately, I " +
                    "focused on implementing the infrastructure and code for the back end services that " +
                    "powered our finished application."],
        startDate: "January 2020",
        endDate: "May 2020",
    },
    {
        id: 1,
        image: "/transportation.jfif",
        title: "Student Assistant: Software Developer",
        employer: "University of Washington Transporation Services",
        shortDesc: "Developed various automated systems for internal workflows.",
        description: ["The first project I worked was to send automated survey emails to those that utilize " +
                    "the Arranged Parking services when arranging events on UW campus. ", 
                    "The Parking Operations team within UWTS has a system in place where they manually enter " + 
                    "the requests into a spreadsheet which is then translated into visual information in Tableau. " +
                    "I developed a program that reads this spreadsheet and will send emails to event arragners " + 
                    "three days after the event occured.",
                    "There was no feedback system previously in place, so this allowed for 100-200 emails being sent out every month " +
                    "and around 50-100 feedback surveys filled every month. This helped in improving the quality " +
                    "of the customer service given by the Arranged Parking team.",
                    "The second project I engaged in was an ackwolegedement system for UW student employees. I utilized " +
                    "Humanity's API to grab scheduled shifts and created a dashboard that helps managers and program " +
                    "coordinators keep track of people's acknowledgement to come into a shift. This allowed for better " +
                    "preparation during big UW events."],
        startDate: "October 2018",
        endDate: "March 2020",
    }
]

export const Experience: React.FC = () => {
    return <div className='container section'>
        <h4 className='center-align'><strong>Experience</strong></h4>
        <p className='center-align'>Click on an image to learn more!</p>
        <Row>
            {JOBS.map(job => {
                return <Col s={12} key={job.id}>
                    <SingleJob job={job} key={job.id}/>
                </Col>
            })}
        </Row>
        
    </div>
}
