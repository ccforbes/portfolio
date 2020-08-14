import styles from './Navigation.module.css'
import { Navbar, NavItem, Icon, SideNav, SideNavItem } from 'react-materialize'
import { Link } from '../types'
import MediaQuery from 'react-responsive'

const navLinks: Link[] = [
    new Link("About", "#about"),
    new Link("Skills", "#skills"),
    new Link("Experience", "#experience"),
    new Link("Projects", "#projects"),
    new Link("Contact", "#contact"),
]

export const Navigation = () => {
    return <>
        <MediaQuery maxWidth="990px">
           {matches => {
               return matches ?
                    <SideNav
                        className={styles.nav + " z-depth-1"}
                        id="SideNav-10"
                        options={{
                            draggable: true
                        }}
                        trigger={<img className={styles.nav} src='/webpage-logo.svg' height='65px' />}
                    >
                        {navLinks.map((link: Link, index: number) => {
                            return <SideNavItem key={index} href={link.link}>
                                {link.name}
                            </SideNavItem>
                        })}
                    </SideNav> :
                    <Navbar
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
           }} 
        </MediaQuery>
    </>
}