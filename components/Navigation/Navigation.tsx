import styles from './*.module.css'
import { Navbar, NavItem, Icon } from 'react-materialize'

export const Navigation = () => {
    return <>
        <Navbar
            className='light-blue darken-4'
            alignLinks='left'
            menuIcon={<Icon>menu</Icon>}
            fixed={true}>
                <NavItem href='/'>Home</NavItem>
                <NavItem href='/experience'>Experience</NavItem>
                <NavItem href='/projects'>Projects</NavItem>
                <NavItem href='/contact'>Contact</NavItem>
        </Navbar>
    </>
}