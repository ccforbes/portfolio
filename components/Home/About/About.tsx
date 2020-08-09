import styles from './About.module.css'
import { Row, Col } from 'react-materialize'

export const About = () => {
    return <div className={styles.about}>
        <div className='container section'>
            <h4 className='center-align'>About Me</h4>
            <p>
                I'm a software engineer based in Seattle, WA. I recently graduated 
                from the University of Washington from the Informatics program. I 
                am passionate about using my full stack software development skills in 
                creating intutive applications to solve various information problems 
                that'll benefit people and society.
            </p>
            <p>
                Here are some of the technologies that I've been working with recently:
            </p>
            <Row>
                <Col m={6} s={12}>
                    <ul>Languages:
                        <li>C#</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>Go</li>
                        <li>Java</li>
                        <li>JavaScript (ES6+)</li>
                        <li>TypeScript</li>
                        <li>SQL</li>
                    </ul>
                </Col>
                <Col m={6} s={12}>
                    <ul>Libraries and Frameworks:
                        <li>ASP.NET Core</li>
                        <li>Express</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                        <li>React</li>
                    </ul>
                </Col>
            </Row>
        </div>
    </div>
}