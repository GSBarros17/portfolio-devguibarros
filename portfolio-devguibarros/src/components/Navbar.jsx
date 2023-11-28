import styles from "./Navbar.module.css"
import ImgLogo from "../img/logo.png"
import ImgDayNight from "../img/dia-e-noite.png"
import { IoMenu } from "react-icons/io5";


export default function Navbar(){
    return(
        <div className={styles.navbarContainer}>
            <div>
                <button>
                    <IoMenu/>
                </button>
                <img src={ImgLogo} alt="Logo"/>
                <button>
                    <img src={ImgDayNight} alt=""/>
                </button>
            </div>
            <nav>
                <ul>
                    <li>Sobre mim</li>
                    <li>Hard skill</li>
                    <li>Soft skill</li>
                    <li>Projetos</li>
                    <li>Contatos</li>
                </ul>
            </nav>
        </div>
    )
}