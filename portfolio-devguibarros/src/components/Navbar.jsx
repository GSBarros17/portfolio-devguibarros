import { useState } from "react"
import { IoMenu, IoChevronForward, IoDesktopOutline, } from "react-icons/io5";
import { FaGears, FaUsers, FaAddressBook, FaUserAstronaut } from "react-icons/fa6";
import styles from "./Navbar.module.css"
import ImgLogo from "../img/logo.png"
import ImgDayNight from "../img/dia-e-noite.png"



export default function Navbar(){
    
    const [hideNavbar, setHideNavbar] = useState("false")
    
    const toggleClasse = () => {
        setHideNavbar(!hideNavbar)
    }
    return(
        <div className={styles.navbarContainer}>
            <div className={styles.headerMenu}>
                <button onClick={toggleClasse}>
                    <IoMenu/>
                </button>
                <a href="#">
                    <img className={styles.imgLogo} src={ImgLogo} alt="Logo"/>
                </a>
                <button>
                    <img className={styles.imgButton} src={ImgDayNight} alt=""/>
                </button>
            </div>
            <nav className={`${styles.navContainer} ${!hideNavbar ? styles.navToggle : ''}`}>
                <ul>
                    <li>
                        <FaUserAstronaut />
                        <a href="#">Sobre mim</a>
                        <IoChevronForward/>
                    </li>
                    <li>
                        <FaGears />
                        <a href="#">Hard Skill</a>
                        <IoChevronForward/>
                    </li>
                    <li>
                        <FaUsers/>
                       <a href="#">Soft Skill</a>
                       <IoChevronForward/> 
                    </li>
                    <li>
                        <IoDesktopOutline/>
                        <a href="#">Projetos</a>
                        <IoChevronForward/>
                    </li>
                    <li>
                        <FaAddressBook/>
                        <a href="#">Contatos</a>
                        <IoChevronForward/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}