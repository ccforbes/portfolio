import styles from './*.module.css'
import { SingleProject } from './SingleProject/SingleProject'
import { Row, Col } from 'react-materialize'

export type Project = {
    id: number,
    name: string,
    description: string,
    startDate: string,
    endDate?: string,
    technologies: string[],
    links?: string[]
}

const PROJECTS: Project[] = [
    {
        id: 3,
        name: "MyFoodDiary",
        description: "",
        startDate: "June 2020",
        technologies: [
            "Azure",
            "C#",
            "React",
            "Xamarin",
        ],
        links: [
            'localhost:3000'
        ]
    },
    {
        id: 2,
        name: "Chat App (Slack Clone)",
        description: "",
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
            'localhost:3000'
        ]
    },
    {
        id: 1,
        name: "MTNEAR",
        description: "",
        startDate: "November 2019",
        endDate: "December 2019",
        technologies: [
            "JSON",
            "Kotlin",
            "XML"
        ],
        links: [
            'localhost:3000'
        ]
    }
]

export const Projects = () => {
    return <>
        <h4>My Projects</h4>
        <p>Click on a project image to learn more!</p>
        <Row>
            <Col m={6} s={12}>
                {PROJECTS.map(project => {
                    return <SingleProject key={project.id} project={project} />
                })}
            </Col>
        </Row>
        
    </>
}