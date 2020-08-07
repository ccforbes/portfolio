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
        name: "Chat App",
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
    return <div className='container section'>
        <h4 className='center-align'>Projects</h4>
        <p className='center-align'>Click on a project image to learn more!</p>
        <Row>
            {PROJECTS.map(project => {
                return <Col m={4} s={12} key={project.id}>
                    <SingleProject project={project} />
                </Col>
            })}
        </Row>
        
    </div>
}