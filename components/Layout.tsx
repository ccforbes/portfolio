import React from 'react'
import Head from 'next/head'
import { Navigation } from './Navigation/Navigation'
import { Footer } from './Footer/Footer'

type LayoutProps = {
    children: React.ReactNode
}

const keywords: string[] = [
    "Christofer Forbes",
    "Chris Forbes",
    "University of Washington",
    "UW",
    "Informatics",
    "Christofer Forbes Informatics",
    "Christofer Forbes University of Washington",
    "Christofer Forbes Software",
    "Christofer Forbes Software Engineer",
    "Christofer Forbes Software Developer",
    "Christofer Forbes Full Stack Developer",
    "Christofer Forbes Seattle, WA",
    "Christofer Forbes AdaptiLab",
    "Christofer Forbes INFO 441",
    "Christofer Forbes Server Side Development",
    "Christofer Forbes UW Transporation Services",
    "Christofer Forbes Web Development"
]

const description: string = "My name is Christofer Forbes and I'm a software engineer from Seattle, WA!"

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className="body">
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
            <meta name="author" content="Christofer Forbes" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(",")} />

            <meta property="og:title" content="Christofer Forbes" />
            <meta property="og:site_name" content="Christofer Forbes" />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />

            <title>Christofer Forbes</title>
            <link rel="shortcut icon" href='/favicon-logo.svg' />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </Head>
        <Navigation />
        <main>
            {children}
        </main>
        <Footer />
    </div>
}