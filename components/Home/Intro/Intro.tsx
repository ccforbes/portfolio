import React from 'react'
import styles from './Intro.module.css'
import { Slider, Slide, Caption } from 'react-materialize'
import MediaQuery from 'react-responsive'

export const Intro: React.FC = () => {
    const options = {
        duration: 500,
        indicators: false,
        interval: 6000
    }

    //const titles: JSX.Element = 

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
                        </div> 
                        : <div>
                            <h1 className={styles.title}>
                                <strong>Christofer Forbes</strong>
                            </h1>
                            <h3 className={styles.title}>
                                Software Engineer
                            </h3>
                        </div>
                    }}
                </MediaQuery>
            </Caption>
        </Slide>
    </Slider>
}