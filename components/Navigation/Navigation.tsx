import styles from './Navigation.module.css'
import { Navbar, NavItem, Icon } from 'react-materialize'

export const Navigation = () => {
    return <>
        <Navbar
            className={styles.nav}
            alignLinks='right'
            brand={<a className='brand-logo' href='/'><img src='/webpage-logo.svg' height='65px'/></a>}
            menuIcon={<Icon>menu</Icon>}
            fixed={true}>
                <NavItem href='/'>Home</NavItem>
                <NavItem href='/experience'>Experience</NavItem>
                <NavItem href='/projects'>Projects</NavItem>
                <NavItem href='/contact'>Contact</NavItem>
        </Navbar>
    </>
}