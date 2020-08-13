import styles from "./Footer.module.css"

export const Footer = () => {
    return <footer className={"page-footer " + styles.footer} >
        <div className="footer-copyright">
            <div className="container">
                © 2014 Copyright Text
                <a className="grey-text text-lighten-4 right" href="#!">
                <ul>
                    <li>More Links</li>
                    <li>More Links</li>
                    <li>More Links</li>
                </ul>
                </a>
            </div>
        </div>
    </footer>
}