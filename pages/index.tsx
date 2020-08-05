import React from 'react'

import { Navbar } from '../components/Navbar/Navbar'
import { Intro } from '../components/Intro/Intro'
import { About } from '../components/About/About'
import { Experience } from '../components/Experience/Experience'
import { Projects } from '../components/Projects/Projects'
import { Contact } from '../components/Contact/Contact'
import styles from './styles/*.module.css'

const IndexPage: React.FC = () => {
    return <>
        <Navbar/>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </>
}

export default IndexPage
