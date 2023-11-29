import { useState } from "react"
import { Link } from "react-router-dom";
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
                <Link to="/">
                    <img className={styles.imgLogo} src={ImgLogo} alt="Logo"/>
                </Link>   
                <button>
                    <img className={styles.imgButton} src={ImgDayNight} alt=""/>
                </button>
            </div>
            <nav className={`${styles.navContainer} ${!hideNavbar ? styles.navToggle : ''}`}>
                <ul>
                    <li>
                        <a href="#">
                            <FaUserAstronaut />
                            Sobre mim
                            <IoChevronForward/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaGears />
                            Hard Skill
                            <IoChevronForward/>
                        </a> 
                    </li>
                    <li> 
                        <a href="#">
                            <FaUsers/>
                            Soft Skill
                            <IoChevronForward/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <IoDesktopOutline/>
                            Projetos
                            <IoChevronForward/>
                        </a> 
                    </li>
                    <li> 
                        <a href="#">
                            <FaAddressBook/>
                            Contatos
                            <IoChevronForward/>
                        </a> 
                    </li>
                </ul>
            </nav>
        </div>
    )
}