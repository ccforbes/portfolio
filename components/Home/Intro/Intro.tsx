import React from 'react'
import styles from './Intro.module.css'
import { Slider, Slide, Caption } from 'react-materialize'

export const Intro: React.FC = () => {
    const options = {
        duration: 500,
        height: 700,
        indicators: false,
        interval: 6000
    }

    return <Slider className={styles.intro} options={options}>
        <Slide image={<img className={'responsive-img ' + styles.img} alt='' src='/pic-of-me.jpg' />}>
            <Caption  placement='right'>
                <h1 className={styles.title}>
                    Hi, I am <strong>Christofer Forbes</strong>
                </h1>
                <h3 className={styles.title}>
                    Software Engineer
                </h3>
            </Caption>
        </Slide>
    </Slider>
}