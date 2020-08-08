import React from 'react'
import { Intro } from '../components/Home/Intro/Intro'
import { About } from '../components/Home/About/About'
import { Layout } from '../components/Layout'

const IndexPage = () => {
    return <Layout title='Home'>
        <Intro />
        <About />
    </Layout>
}

export default IndexPage
