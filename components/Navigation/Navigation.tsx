import styles from './*.module.css'
import { Navbar, NavItem, Icon } from 'react-materialize'

export const Navigation = () => {
    return <>
        <Navbar
            alignLinks='right'
            menuIcon={<Icon>menu</Icon>}
            fixed={true}>
                <NavItem href='#about'>About</NavItem>
                <NavItem href='#experience'>Experience</NavItem>
                <NavItem href='#projects'>Projects</NavItem>
                <NavItem href='#contact'>Contact</NavItem>
        </Navbar>
    </>
}