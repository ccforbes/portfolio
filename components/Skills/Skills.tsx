import { Row, Col, Icon } from "react-materialize"
import styles from "./Skills.module.css"

const description: string[] = [
    "Here are the technologies that I've worked with!",
    "The "
]

const proficientLanguages: string[] = [
    "CSS", 'HTML', 'Go', 'Java', "JavaScript", 'TypeScript', 'SQL'
]

const proficientFrameworks: string[] = [
    'Express', 'Next.js', 'Node.js', 'React'
]

const proficientTools: string[] = [
    'AWS', 'Docker', 'GCP', 'Git', 'MongoDB', 'Postman'
]

const familiarLanguages: string[] = [
    'Bash Script', 'C', 'C++', 'C#', 'Kotlin', 'Python'
]

const familiarFrameworks: string[] = [
    'ASP.NET Core', 'Redux'
]

const familiarTools: string[] = [
    'Azure', 'Redis', 'RabbitMQ', 'Wensockets'
]

type Skills = {
    title: string,
    icon: string,
    proficient: string[],
    familiar: string[]
}

const skills: Skills[] = [
    {
        title: "Languages",
        icon: "code",
        proficient: proficientLanguages,
        familiar: familiarLanguages
    },
    {
        title: "Frameworks",
        icon: "settings",
        proficient: proficientFrameworks,
        familiar: familiarFrameworks
    },
    {
        title: "Tools",
        icon: "build",
        proficient: proficientTools,
        familiar: familiarTools
    },
]

export const Skills = () => {
    return <div className='container section'>
        <h4 className='center-align'><strong>Skills</strong></h4>
        <p className='center-align'>
            Here are the technologies that I've worked with!<br />
            <strong>Technologies in bold means that I'm proficient in using them.</strong><br />
            <em>
                Technologies in italic means that I'm familiar in using them. 
            </em>
        </p>
            <div className='section'>
                <Row className='center-align'>
                    {skills.map((skillset: Skills, index: number) => {
                        return <Col m={4} s={12} key={index}>
                            <div className="section">
                                <div className={styles.title}>
                                    <Icon medium className={styles.icon}>{skillset.icon}</Icon>
                                    <h5>{skillset.title}</h5>
                                </div>
                                <p><strong>{skillset.proficient.join(", ")}</strong></p>
                                <p><em>{skillset.familiar.join(", ")}</em></p>
                            </div>
                        </Col>
                    })}
                </Row>
            </div>
    </div>
}