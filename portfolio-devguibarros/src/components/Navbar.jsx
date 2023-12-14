import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { IoMenu, IoHome, IoChevronForward, IoDesktopOutline, IoLogOutSharp, IoAddCircle, IoTerminal } from "react-icons/io5"
import { FaAddressBook, FaUserAstronaut, FaUserLock } from "react-icons/fa6"
import useAuthentication from "../hooks/useAuthentication"
import { useAuthValue } from "../context/AuthContext"
import { useTheme } from "../context/themeContext"
import styles from "./Navbar.module.css"
import ImgLogo from "../img/logo.png"
import ImgLogoName from "../img/logo-nome.png"
import ImgDayNight from "../img/dia-e-noite.png"




export default function Navbar(){
    
    const {user} = useAuthValue()
    const {logout} = useAuthentication()
    const [hideNavbar, setHideNavbar] = useState("false")
    const location = useLocation()
    const isHomePage = location.pathname === "/"

    const toggleClasse = () => {
        setHideNavbar(!hideNavbar)
    }

    const handleClickLink = () =>{
        setHideNavbar(true)
    }

    const { toggleLightMode } = useTheme();

    return(
        <div className={styles.navbarContainer}>
            <div className={styles.headerMenu}>
                <button className={styles.menuBurger} onClick={toggleClasse}>
                    <IoMenu/>
                </button>
                <Link to="/portfolio-devguibarros/" onClick={handleClickLink}>
                    <img className={styles.imgLogo} src={ImgLogo} alt="Logo"/>
                    <img className={styles.imgLogoName} src={ImgLogoName} alt="Logo"/>
                </Link>   
                <button onClick={toggleLightMode}>
                    <img className={styles.imgButton} src={ImgDayNight} alt=""/>
                </button>
            </div>
            <nav className={`${styles.navContainer} ${!hideNavbar ? styles.navToggle : ''}`}>
                <ul> 
                    {isHomePage ? (
                        <>
                            <li>
                                <a href="#sobre-mim" onClick={handleClickLink}>
                                    <FaUserAstronaut />
                                    Sobre mim
                                    <IoChevronForward className={styles.svgArrow}/>
                                </a>
                            </li>
                            <li>
                                <a href="#projects" onClick={handleClickLink}>
                                    <IoDesktopOutline/>
                                    Projetos
                                    <IoChevronForward className={styles.svgArrow}/>
                                </a> 
                            </li>
                        </>
                    ):(
                        <li>
                            <Link to="/portfolio-devguibarros/" onClick={handleClickLink}>
                                <IoHome />
                                Home
                                <IoChevronForward className={styles.svgArrow}/>
                            </Link>
                        </li>
                    )}
                    <li> 
                        <Link to="/contact" onClick={handleClickLink}>
                            <FaAddressBook/>
                            Contatos
                            <IoChevronForward className={styles.svgArrow}/>
                        </Link> 
                    </li>
                    {!user && (
                        <li> 
                            <Link to="/login" onClick={handleClickLink}>
                                <FaUserLock/>
                                Acesso Admin
                                <IoChevronForward className={styles.svgArrow}/>
                            </Link>
                        </li>
                    )}
                    {user && (
                        <>
                            <li>
                                <Link to="/dashboard" onClick={handleClickLink}>
                                    <IoTerminal />
                                    Painel
                                    <IoChevronForward className={styles.svgArrow}/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/createcard" onClick={handleClickLink}>
                                    <IoAddCircle />
                                    Criar card
                                    <IoChevronForward className={styles.svgArrow}/>
                                </Link>
                            </li>
                            <li>
                                <div className={styles.logout} onClick={handleClickLink}>
                                    <IoLogOutSharp />
                                    <button onClick={logout}>Sair</button>
                                    <IoChevronForward className={styles.svgArrow}/>
                                </div>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    )
}