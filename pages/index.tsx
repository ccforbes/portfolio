import React from 'react'
import Head from 'next/head'
import { Navigation } from '../components/Navigation/Navigation'
import { Intro } from '../components/Intro/Intro'
import { About } from '../components/About/About'
import { Experience } from '../components/Experience/Experience'
import { Projects } from '../components/Projects/Projects'
import { Contact } from '../components/Contact/Contact'
import styles from './styles/*.module.css'
import ScrollableAnchor from 'react-scrollable-anchor'

const IndexPage: React.FC = () => {
    return <>
        <Head>
            <title>Christofer Forbes</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </Head>
        <Navigation />
        <Intro />

        <ScrollableAnchor id='about'>
            <div>
                <About />
            </div>
        </ScrollableAnchor>
        
        <ScrollableAnchor id='experience'>
            <div>
                <Experience />
            </div>
        </ScrollableAnchor>
        
        <ScrollableAnchor id='projects'>
            <div>
                <Projects />
            </div>
        </ScrollableAnchor>
        
        <ScrollableAnchor id='contact'>
            <div>
                <Contact />
            </div>
        </ScrollableAnchor>

    </>
}

export default IndexPage
