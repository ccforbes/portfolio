import React from 'react'
import styles from './Intro.module.css'
import { Slider, Slide, Caption } from 'react-materialize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from '@material-ui/core'

type FALink = {
    link: string,
    icon: IconDefinition
}

const links: FALink[] = [
    {
        link: "https://github.com/ccforbes",
        icon: faGithub
    },
    {
        link: "https://linkedin.com/in/ccforbes1998",
        icon: faLinkedin
    },
    {
        link: "https://drive.google.com/file/d/1ixsSbxZPndp2I3HF7V5l46At7XMEZtWX/view?usp=sharing",
        icon: faFileAlt
    },
    {
        link: "mailto:ccforbes1998@gmail.com",
        icon: faEnvelope
    }
]

export const Intro: React.FC = () => {
    const tabletSize: boolean = useMediaQuery("(min-width: 1366px)")
    const laptopSize: boolean = useMediaQuery("(min-width: 1920px)")
    let height: number | undefined
    let iconSize: "2x" | "3x" | undefined = "2x"

    if (tabletSize) {
        height = 600
    } 
    if (laptopSize) {
        height = 800
        iconSize = "3x"
    }

    let options = {
        duration: 1500,
        height: height,
        indicators: false,
        interval: 6000
    }

    return <Slider className={styles.intro} options={options}>
        <Slide image={<img className={styles.img} alt='' src='/pic-of-me.jpg' />}>
            <Caption placement='right'>
                <h1 className={styles.title}>
                    <strong>Christofer Forbes</strong>
                </h1>
                <h3 className={styles.title}>
                    Software Engineer
                </h3>
                <div className={styles.links + " right"}>
                    {links.map((link: FALink, index: number) => {
                        return <a className={styles.link} key={index} href={link.link} target="_blank">
                            <FontAwesomeIcon className={styles.icon} icon={link.icon} size={iconSize} />
                        </a>
                    })}
                </div>
            </Caption>
        </Slide>
    </Slider>
}
