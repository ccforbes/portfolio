//import styles from './*.module.css'
import { SingleProject } from './SingleProject/SingleProject'
import { Row, Col } from 'react-materialize'
import { Link } from '../types'

export type Project = {
    id: number,
    name: string,
    description: string[],
    startDate: string,
    endDate?: string,
    technologies: string[],
    links: Link[],
    image: string,
}

const PROJECTS: Project[] = [
    {
        id: 4,
        name: "MyFoodDiary",
        description: ["I'm currently working with \"Computing ReApplied\", a small start-up based in Seattle.",
                    "Our project, \"MyFoodDiary\", is a mobile app/web portal pair that allows for " +
                    "patients to log their food intake on their phones and illness symptoms they may have. " +
                    "The information will then be processed and visualized for them to keep track of their in " +
                    "nutrient intake. Doctors can see their patients daily intake and make data driven diagnoeses " +
                    "based on this information.",
                    "This project is still in development. I'm contributing in writing the back end services " +
                    "for this application."],
        startDate: "June 2020",
        technologies: [
            "Azure",
            "C#",
            "React",
            "SQL",
            "Xamarin",
        ],
        links: [
            new Link("C-RA Website", "https://computingreapplied.com/")
        ],
        image: "/myfooddiary.png"
    },
    {
        id: 3,
        name: "HireAssist.ML",
        description: ["This was a project for my co-op at AdaptiLab. This also served as my 2020 Capstone for " +
                    "the Informatics program.",
                    "My team wanted to help streamline the job application process. This project aims to parallel " +
                    "AdaptiLab's business model, in which they provide a platform for tech companies a streamlined " +
                    "way to find future employees and candidates.",
                    "HireAssist.ML streamlines the job application by providing for job recommendations based on " +
                    "one's resume, and will also fill out repetitive information in online applications. We created " +
                    "a Chrome Extension that provides all these services and will always be accessible within the " +
                    "browser.",
                    "By providing these services, job searchers can fill out many job applications quickly, allowing " +
                    "them to more quickly land their next opportunity."],
        startDate: "January 2020",
        endDate: "May 2020",
        technologies: [
            "Docker",
            "Firebase",
            "Express",
            "GCP Cloud Run",
            "Node.js",
            "React",
        ],
        links: [
            new Link("HireAssist.ML", "https://yuxinzhangchristina.github.io/HuskyTECC/"),
            new Link("Demo", "https://www.youtube.com/watch?v=ajpYWZwTCYQ")
        ],
        image: "/hireassist-ml.png"
    },
    {
        id: 2,
        name: "Chat App",
        description: ["I wrote a Slack clone chat application to help me understand end-to-end infrastracture of an " +
                    "interactive web application.",
                    "This application uses React for the front-end interface, Golang for handling authentication, Node.js microservices" +
                    "to handle channel creationg and sending messages, websockets amd working queues to handle realtime " +
                    "interaction, Docker to containerize services, and AWS EC2 for the main infrastracture.",
                    "I learned how to deploy applications, write RESTful API services, very basic distributed system concepts " +
                    "and microservices."],
        startDate: "January 2020",
        endDate: "March 2020",
        technologies: [
            "AWS EC2",
            "Docker",
            "Go",
            "MongoDB",
            "MySQL",
            "Node.js",
            "RabbitMQ",
            "React",
            "Redis",
            "Redux"
        ],
        links: [
            new Link("Code", "https://github.com/ccforbes/chat-app")
        ],
        image: "/placeholder.jpg"
    },
    {
        id: 1,
        name: "MTNEAR",
        description: ["This Android applications uses REI's outdoor API to list and show nearby hiking trails and climbing routes.",
                    "We allow for users to filter out the types of trails and activities to better suit their capabilities. The " +
                    "user can then see how far the trail is, and basic information about the trail. They can then share this with their " +
                    "friends.",
                    "I administered a team of four to discuss requirements and assign tasks to complete the project. I also developed " +
                    "the list view portion of our application.",
                    "This project was for INFO 448: Android Mobile Development."],
        startDate: "November 2019",
        endDate: "December 2019",
        technologies: [
            "JSON",
            "Kotlin",
            "XML"
        ],
        links: [
            new Link("Code", "https://github.com/ccforbes/mtnear-android-app")
        ],
        image: "/mtnear.jpg"
    }
]

export const Projects = () => {
    return <div className='container section'>
        <h4 className='center-align'><strong>Projects</strong></h4>
        <p className='center-align'>Click on a project image to learn more!</p>
        <Row>
            {PROJECTS.map(project => {
                return <Col xl={6} l={6} m={12} key={project.id}>
                    <SingleProject project={project} />
                </Col>
            })}
        </Row>
        
    </div>
}