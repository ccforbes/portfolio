import React from 'react'
import Head from 'next/head'
import { Navigation } from './Navigation/Navigation'

type LayoutProps = {
    title: string,
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
    return <>
        <Head>
            <title>{title + ' | Christofer Forbes'}</title>
            <link rel="shortcut icon" href='/custom-logo.svg' />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </Head>
        <body>
            <Navigation />
            {children}
        </body>
        
    </>
}