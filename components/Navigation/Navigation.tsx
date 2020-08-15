import styles from './Navigation.module.css'
import { Navbar, NavItem, Icon, SideNav, SideNavItem } from 'react-materialize'
import { Link } from '../types'
import { useMediaQuery } from '@material-ui/core'

const navLinks: Link[] = [
    new Link("About", "#about"),
    new Link("Skills", "#skills"),
    new Link("Experience", "#experience"),
    new Link("Projects", "#projects"),
    new Link("Contact", "#contact"),
]

export const Navigation = () => {
    const matches = useMediaQuery("(max-width:600px)")

    if (matches) {
        return <div className={styles.nav}>
            <style>
                {`#root > div > div {
                    z-index: 99999 !important;
                }`}
            </style>
            <SideNav
                className={styles.nav}
                id="SideNav-10"
                options={{
                    draggable: true
                }}
                trigger={<div className={styles.mobilenav  + " center"}>
                    <img className={styles.nav} src='/webpage-logo.svg' height='65px' />
                </div>}
            >
                {navLinks.map((link: Link, index: number) => {
                    return <SideNavItem key={index} href={link.link}>
                        {link.name}
                    </SideNavItem>
                })}
            </SideNav>
        </div>
    }

    return <Navbar
        className={styles.nav}
        alignLinks='right'
        brand={<a className='brand-logo' href='/'><img src='/webpage-logo.svg' height='65px'/></a>}
        id='mobile-nav'
        menuIcon={<Icon>menu</Icon>}
        fixed={true}>
            {navLinks.map((navLink: Link, index: number) => {
                return <NavItem key={index} href={navLink.link}>{navLink.name}</NavItem>
            })}
    </Navbar>
    
}