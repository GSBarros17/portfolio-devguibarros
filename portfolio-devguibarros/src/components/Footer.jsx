import styles from "./Footer.module.css"
import ImgLogo from "../img/logo-nomelateral.png"

export default function Footer(){
    return(
        <div className={styles.footerContainer}>
            <img src={ImgLogo} alt="Logo"/>
            <div className={styles.socialMedia}>
                <a href="#">whats</a>
                <a href="#">insta</a>
                <a href="#">link</a>
            </div>
            <p>Copyright ©️ DevGuilhermeBarros</p>
        </div>
    )
}