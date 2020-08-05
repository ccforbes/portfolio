import styles from './*.module.css'
import { SingleProject } from './SingleProject/SingleProject'

export type Project = {
    id: number,
    name: string,
    description: string,
    startDate: string,
    endDate?: string,
    technologies: string[]
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
        ]
    }
]

export const Projects = () => {
    return <>
        <h4>My Projects</h4>
        {PROJECTS.map(project => {
            return <SingleProject key={project.id} project={project} />
        })}
    </>
}