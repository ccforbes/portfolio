import React from 'react'
import { Intro } from '../components/Intro/Intro'
import { Layout } from '../components/Layout'
import { About } from '../components/About/About'
import { Skills } from '../components/Skills/Skills'
import { Experience } from '../components/Experience/Experience'
import { Projects } from '../components/Projects/Projects'
import { Contact } from '../components/Contact/Contact'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import { useMediaQuery } from '@material-ui/core'

const IndexPage = () => {
    const matches: boolean = useMediaQuery("(min-width: 992px)")
    if (matches) configureAnchors({offset: -64})
    return <Layout>
        <Intro />
        <ScrollableAnchor id="about">
            <div>
                <About />
            </div>
        </ScrollableAnchor>

        <ScrollableAnchor id="skills">
            <div>
                <Skills />
            </div>
        </ScrollableAnchor>

        <ScrollableAnchor id="experience">
            <div>
                <Experience />
            </div>
        </ScrollableAnchor>

        <ScrollableAnchor id="projects">
            <div>
                <Projects />
            </div>
        </ScrollableAnchor>

        <ScrollableAnchor id="contact">
            <div>
                <Contact />
            </div>
        </ScrollableAnchor>

    </Layout>
}

export default IndexPage
