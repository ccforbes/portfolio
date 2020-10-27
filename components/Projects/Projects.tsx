//import styles from './*.module.css'
import { SingleProject } from './SingleProject/SingleProject'
import { Row, Col } from 'react-materialize'
import { Link } from '../types'

export type Project = {
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
        name: "Key Signature Visualizer",
        description: ["I created a simple web app that allows for someone to choose a musical scale of their " +
            "choice and will animate the creation of their key signature. A treble clef and a bass clef " +
            "are included to display note location as well as reveal the accidentals to make the key signature. " +
            "A keyboard is also shown to display the image.",
            "Updates will be included for optional step by step iteration, new musical modes, highlighting " +
            "keys on the keyboard to better visualize the scale pattern, and sound to play each key signature.",
            "There are also long term plans to make this one module of a music theory tutor application."
        ],
        startDate: "October 2020",
        endDate: "October 2020",
        technologies: [
            "Next.js", 
            "TypeScript", 
            "Anime.js", 
            "Bootstrap", 
            "Figma", 
            "Vercel"
        ],
        links: [
            new Link("Website", "https://music-theory-app.vercel.app/"),
            new Link("Code", "https://github.com/ccforbes/music-theory-app")
        ],
        image: "/visualizer.png"
    },
    {
        name: "MyMedDiary",
        description: ["\"MyMedDiary\", is a mobile app/web portal pair, from \"Computing ReApplied\", that allows " +
            "patients to log their food intake on their phones and illness symptoms they may have. " +
            "The information will then be processed and visualized for them to keep track of their " +
            "nutrient intake. Doctors can see their patients' daily intake and make data driven diagnoses " +
            "based on this information.",
            "The MVP of the project was launched and is currently being used by Seattle Children's in a pilot study. " +
            "The application will continue to be updated and maintained."
        ],
        startDate: "June 2020",
        endDate: "August 2020",
        technologies: [
            "Azure",
            "C#",
            "React",
            "SQL",
            "Xamarin",
        ],
        links: [
            new Link("MyMedDiary Portal", "https://portal.computingreapplied.com/"),
            new Link("C-RA Website", "https://computingreapplied.com/")
        ],
        image: "/myfooddiary.png"
    },
    {
        name: "HireAssist.ML",
        description: ["This was a project for my co-op at AdaptiLab. This also served as my 2020 Capstone for " +
            "the Informatics program.",
            "My team wanted to help streamline the job application process. This project aims to parallel " +
            "AdaptiLab's business model, in which they provide a streamlined platform for tech companies " +
            "to find future employees and candidates.",
            "HireAssist.ML streamlines the job application by providing job recommendations based on " +
            "one's resume, and will also fill out repetitive information in online applications. We created " +
            "a Chrome Extension that provides all these services and will always be accessible within the " +
            "browser. By providing these services, job searchers can fill out many job applications quickly, allowing " +
            "them to more quickly land their next opportunity.",
            "I was involved in all aspects of the software development lifecycle: conducting user research, " +
            "designing wireframes and prototypes, and development. I was ultimately responsible for establishing a " +
            "serverless cloud architecture using Google Cloud Run, writing our back end application using Node.js, and deploying " +
            "our application to the cloud with Docker."
        ],
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
        name: "Chat App",
        description: ["I wrote a Slack clone chat application to help me understand end-to-end infrastructure of an " +
            "interactive web application.",
            "This application uses React for the front-end interface, Golang for handling authentication, Node.js microservices " +
            "to handle channel creationg and sending messages, websockets amd working queues to handle realtime " +
            "interaction, Docker to containerize services, and AWS EC2 for the main infrastructure.",
            "I learned how to deploy applications, write RESTful API services, very basic distributed system concepts " +
            "and microservices."
        ],
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
        name: "MTNEAR",
        description: ["This Android application uses REI's outdoor API to list and show nearby hiking trails and climbing routes.",
            "We allow users to filter out the types of trails and activities to better suit their capabilities. The " +
            "user can then see how far the trail is, and basic information about the trail. They can then share this with their " +
            "friends.",
            "I administered a team of four to discuss requirements and assign tasks to complete the project. I also developed " +
            "the list view portion of our application.",
            "This project was for an Android Mobile Development course in my undergraduate program."],
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
    },
    {
        name: "SendNews",
        description: ["I worked on a team of 5 to create a simple news feed application with a quiz feature that allow people to make/take quizzes. " +
            "The goal of the application is to game-ify reading the news and allow people to gain points after taking a quiz. " +
            "A leaderboard is present that displays users with the most points.",
            "I mainly worked on the front end of the website, by creating the card components for each news article. We used React for " +
            "our front end framework. I also was responsible for automating API calls to receive the latest news articles. " +
            "We used the News API to receive our data. I then used Google Apps Script to trigger a script that retrieves new articles every 30 minutes. " +
            "This script then connects to our Firebase database which then populates our news feed. The application is hosted on Heroku.",
            "The project was for a Cooperative Software Development class within my undergraduate program."
        ],
        startDate: "October 2019",
        endDate: "December 2019",
        technologies: [
            "React",
            "Heroku",
            "Firebase",
            "Google Apps Script",
        ],
        links: [
            new Link("Website", "http://app-sendnews.herokuapp.com/")
        ],
        image: "/send-news.png"
    },
    {
        name: "Music Festival Database",
        description: ["I worked on a team of four to create a relational database to streamline and optimize the musician lineup decision making process.",
            "The goal of this database is to provide easily accessible, pertinent information that would allow organizers to construct " +
            "organizers to construct a financially viable andd entertaining event for their consumer base. This database can keep track " +
            "of each step of the decision making process and keep track of certain data.",
            "I wrote SQL scripts to create the Contact, Cost, Agent, and Talent entities. I also wrote stored procedures " +
            "and complex queries related to these tables. Our team went through several iterations of normalizing and optimizing " +
            "the database. We also diagramed the scheme of our database using Crow's Foot notation to figure out relations between entities.",
            "This project was for my Database Design and Modeling course in my undergraduate program."
        ],
        startDate: "September 2019",
        endDate: "December 2019",
        technologies: [
            "SQL Server",
        ],
        links: [
            new Link("Code", "https://github.com/ccforbes/music-festival-database")
        ],
        image: "/music-festival.png"
    },
]

export const Projects = () => {
    return <div className='container section'>
        <h4 className='center-align'><strong>Projects</strong></h4>
        <p className='center-align'>Click on a project image to learn more!</p>
        <Row>
            {PROJECTS.map((project: Project, index: number) => {
                return <Col xl={6} l={6} m={12} key={index}>
                    <SingleProject project={project} />
                </Col>
            })}
        </Row>
    </div>
}