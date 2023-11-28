import styles from "./Navbar.module.css"
import ImgLogo from "../img/logo.png"
import ImgDayNight from "../img/dia-e-noite.png"
import { IoMenu } from "react-icons/io5";


export default function Navbar(){
    return(
        <div className={styles.navbarContainer}>
            <div className={styles.headerMenu}>
                <button>
                    <IoMenu/>
                </button>
                <a href="">
                    <img className={styles.imgLogo} src={ImgLogo} alt="Logo"/>
                </a>
                <button>
                    <img className={styles.imgButton} src={ImgDayNight} alt=""/>
                </button>
            </div>
            <nav className={styles.navContainer}>
                <ul>
                    <li>
                        <a href="#">Sobre mim</a>
                    </li>
                    <li>
                        <a href="#">Hard Skill</a>
                    </li>
                    <li>
                       <a href="#">Soft Skill</a> 
                    </li>
                    <li>
                        <a href="#">Projetos</a>
                    </li>
                    <li>
                        <a href="#">Contatos</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}