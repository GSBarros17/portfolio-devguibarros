import styles from "./Footer.module.css"
import ImgLogo from "../img/logo-nomelateral.png"

export default function Footer(){
    return(
        <div className={styles.footerContainer}>
            <img src={ImgLogo} alt="Logo"/>
            <div className={styles.socialMedia}>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </div>
            <p>Copyright ©️ DevGuilhermeBarros</p>
        </div>
    )
}