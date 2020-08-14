import styles from './Navigation.module.css'
import { Navbar, NavItem, Icon } from 'react-materialize'
import { Link } from '../types'

const navLinks: Link[] = [
    new Link("About", "#about"),
    new Link("Skills", "#skills"),
    new Link("Experience", "#experience"),
    new Link("Projects", "#projects"),
    new Link("Contact", "#contact"),
]

export const Navigation = () => {
    return <>
        <Navbar
            className={styles.nav}
            alignLinks='right'
            brand={<a className='brand-logo' href='/'><img src='/webpage-logo.svg' height='65px'/></a>}
            menuIcon={<Icon>menu</Icon>}
            fixed={true}>
                {navLinks.map(navLink => {
                    return <NavItem href={navLink.link}>{navLink.name}</NavItem>
                })}
        </Navbar>
    </>
}