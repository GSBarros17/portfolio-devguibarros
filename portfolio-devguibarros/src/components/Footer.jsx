import styles from "./Footer.module.css"
import { FaWhatsapp, FaInstagram, FaLinkedin} from "react-icons/fa6";
import ImgLogo from "../img/logo-nomelateral.png"

export default function Footer(){
    return(
        <div className={styles.footerContainer}>
            <img src={ImgLogo} alt="Logo"/>
            <div className={styles.socialMedia}>
                <a href="#"><FaWhatsapp/></a>
                <a href="#"><FaInstagram/></a>
                <a href="#"><FaLinkedin/></a>
            </div>
            <p>Copyright ©️ 2023 DevGuilhermeBarros</p>
        </div>
    )
}