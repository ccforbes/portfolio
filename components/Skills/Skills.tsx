import { Row, Col, Icon } from "react-materialize"
import styles from "./Skills.module.css"

const languages: string[] = [
    'C#', "CSS", 'HTML', 'Go', 'Java', "JavaScript", 'TypeScript', 'SQL'
]

const frameworks: string[] = [
    'ASP.NET Core', 'Express', 'Next.js', 'Node.js', 'React'
]

const tools: string[] = [
    'AWS', 'Azure', 'Docker', 'GCP', 'Git', 'MongoDB'
]

type Skills = {
    title: string,
    icon: string,
    list: string[]
}

const skills: Skills[] = [
    {
        title: "Languages",
        icon: "code",
        list: languages
    },
    {
        title: "Frameworks",
        icon: "settings",
        list: frameworks
    },
    {
        title: "Tools",
        icon: "build",
        list: tools
    },
]

export const Skills = () => {
    return <div className='container section'>
        <h4 className='center-align'><strong>Skills</strong></h4>
            <div className='section'>
                <Row className='center-align'>
                    {skills.map((skillset: Skills, index: number) => {
                        return <Col m={4} s={12} key={index}>
                            <div className="section">
                                <div className={styles.title}>
                                    <Icon medium className={styles.icon}>{skillset.icon}</Icon>
                                    <h5>{skillset.title}</h5>
                                </div>
                                <p>{skillset.list.join(", ")}</p>
                            </div>
                        </Col>
                    })}
                </Row>
            </div>
    </div>
}