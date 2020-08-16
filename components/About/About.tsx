import styles from './About.module.css'

// const paragraphs: string[] = [
//     "I'm a software engineer based in Seattle, WA. I recently graduated from " +
//     "the University of Washington with a Bachelor of Science in Informatics with " +
//     "a focus on Software Development.",
//     "I am passionate about using my full stack software development skills in " +
//     "creating intuitive applications to solve various information problems " +
//     "that'll benefit people and society.",
//     "Outside of work or school, I love playing tennis and I'm a huge music geek, " +
//     "nerding out over a capella arrangements and pop / R&B runs. "
// ]

const paragraphs: JSX.Element[] = [
    <p>
        I'm a software engineer based in Seattle, WA. I recently graduated from 
        the <a href="https://www.washington.edu/">University of Washington</a> with 
        a Bachelor of Science in <a href="https://ischool.uw.edu/programs/informatics/what-is-informatics">Informatics</a> with a focus on Software Development.
    </p>,
    <p>
        I am passionate about using my full stack software development skills in 
        creating intuitive applications to solve various information problems 
        that'll benefit people and society.
    </p>,
    <p>
        Outside of work or school, I love playing tennis and I'm a huge music geek, 
        nerding out over a capella arrangements and pop / R&B runs. 
    </p>
]

export const About = () => {
    return <div className={styles.about}>
        <div className='container section'>
            <h4 className='center-align'><strong>About Me</strong></h4>
            <div className={'section ' + styles.paragraphs}>
                {paragraphs.map((paragraph: JSX.Element) => {
                    return paragraph
                })}
                <p>
                    <strong>Please check out some of my work below!</strong>
                </p>
            </div>
        </div>
    </div>
}