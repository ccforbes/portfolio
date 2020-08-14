import styles from "./Footer.module.css"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
    return <footer className={"page-footer " + styles.footer} >
        <div className="footer-copyright">
            <div className="container">
                © 2020 Copyright Christofer Forbes
                <div className={"right " + styles.links}>
                    <a href="https://github.com/ccforbes">
                        <FontAwesomeIcon className={styles.icon} icon={faGithub} size="2x" />
                    </a>
                    <a href="https://linkedin.com/in/ccforbes1998">
                        <FontAwesomeIcon className={styles.icon} icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
}