import React from 'react'
import styles from './Intro.module.css'
import { Slider, Slide, Caption } from 'react-materialize'
import MediaQuery from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
        link: "https://drive.google.com/file/d/1kfxA90wo6OMfk3KjSWnLrmUu0Xkhn9Gm/view",
        icon: faFileAlt
    },
    {
        link: "mailto:ccforbes1998@gmail.com",
        icon: faEnvelope
    }
]

export const Intro: React.FC = () => {
    const options = {
        duration: 500,
        indicators: false,
        interval: 6000
    }

    return <Slider className={styles.intro} options={options}>
        <Slide image={<img className={styles.img} alt='' src='/pic-of-me.jpg' />}>
            <Caption placement='right'>
                <MediaQuery maxDeviceWidth={900}>
                    {matches => {
                        return matches 
                        ? <div>
                            <h1 className={styles.title}>
                                <strong>Christofer Forbes</strong>
                            </h1>
                            <h3 className={styles.title}>
                                Software Engineer
                            </h3>
                            <div className={styles.links + " right"}>
                                {links.map((link: FALink, index: number) => {
                                    return <a className={styles.link} key={index} href={link.link}>
                                        <FontAwesomeIcon className={styles.icon} icon={link.icon} size="2x" />
                                    </a>
                                })}
                            </div>
                        </div> 
                        : <div>
                            <h1 className={styles.title}>
                                <strong>Christofer Forbes</strong>
                            </h1>
                            <h3 className={styles.title}>
                                Software Engineer
                            </h3>
                            <div className={styles.links + " right"}>
                                {links.map((link: FALink, index: number) => {
                                    return <a className={styles.link} key={index} href={link.link}>
                                        <FontAwesomeIcon className={styles.icon} icon={link.icon} size="2x" />
                                    </a>
                                })}
                            </div>
                        </div>
                    }}
                </MediaQuery>
            </Caption>
        </Slide>
    </Slider>
}