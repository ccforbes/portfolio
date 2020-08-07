import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Navigation } from './Navigation/Navigation'
import { Footer } from 'react-materialize'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type LayoutProps = {
    title: string,
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
    return <>
        <Head>
            <title>{title + 'Christofer Forbes'}</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </Head>
        <Navigation />
        {children}
    </>
}