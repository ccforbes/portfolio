import React from 'react'
import Head from 'next/head'
import { Navigation } from '../components/Navigation/Navigation'
import { Intro } from '../components/Intro/Intro'
import { About } from '../components/About/About'
import { Experience } from '../components/Experience/Experience'
import { Projects } from '../components/Projects/Projects'
import { Contact } from '../components/Contact/Contact'
import styles from './styles/*.module.css'

const IndexPage: React.FC = () => {
    return <>
        <Head>
            <title>Christofer Forbes</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </Head>
        <Navigation />
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </>
}

export default IndexPage
