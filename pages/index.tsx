import React from 'react'
import { Intro } from '../components/Intro/Intro'
import { About } from '../components/About/About'
import { Layout } from '../components/Layout'

const IndexPage: React.FC = () => {
    return <Layout title='Home'>
        <Intro />
        <About />
    </Layout>
}

export default IndexPage
