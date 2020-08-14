import styles from './About.module.css'

const paragraphs: string[] = [
    "I'm a software engineer based in Seattle, WA. I recently graduated from " +
    "the University of Washington with a Bachelor of Science in Informatics with " +
    "a focus on Software Development.",
    "I am passionate about using my full stack software development skills in " +
    "creating intutive applications to solve various information problems " +
    "that'll benefit people and society.",
    "Outside of work or school, I'm a huge music geek, nerding out over a capella " +
    "arrangments and pop / R&B runs. I also play tennis and am a huge Pokemon and " +
    "Avatar: The Last Airbender fanatic."
]

export const About = () => {
    return <div className={styles.about}>
        <div className='container section'>
            <h4 className='center-align'><strong>About Me</strong></h4>
            <div className='section'>
                {paragraphs.map(paragraph => {
                    return <p>{paragraph}</p>
                })}
                <p>
                    <strong>Please check out some of my work below!</strong>
                </p>
            </div>
        </div>
    </div>
}