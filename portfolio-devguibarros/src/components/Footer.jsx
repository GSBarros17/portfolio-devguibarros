import styles from "./Footer.module.css"
import { FaWhatsapp, FaInstagram, FaLinkedin} from "react-icons/fa6";
import ImgLogo from "../img/logo-nomelateral.png"

export default function Footer(){
    const anoAtual = new Date().getFullYear()
    
    return(
        <div className={styles.footerContainer}>
            <img src={ImgLogo} alt="Logo"/>
            <div className={styles.socialMedia}>
                <a aria-label="icone whatsapp" href="https://wa.me/5561999767446"><FaWhatsapp/></a>
                <a aria-label="icone instagram" href="https://www.instagram.com/devgbarros/"><FaInstagram/></a>
                <a aria-label="icone linkedin" href="https://www.linkedin.com/in/guilherme-barros-b05632294"><FaLinkedin/></a>
            </div>
            <p>Copyright ©️ {anoAtual} DevGuilhermeBarros</p>
        </div>
    )
}