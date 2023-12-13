import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { IoMenu, IoHome, IoChevronForward, IoDesktopOutline, IoLogOutSharp, IoAddCircle, IoTerminal } from "react-icons/io5"
import { FaGears, FaUsers, FaAddressBook, FaUserAstronaut, FaUserLock } from "react-icons/fa6"
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
                <Link to="/" onClick={handleClickLink}>
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
                                    <IoChevronForward/>
                                </a>
                            </li>
                            <li>
                                <a href="#hard-skill" onClick={handleClickLink}>
                                    <FaGears />
                                    Hard Skill
                                    <IoChevronForward/>
                                </a> 
                            </li>
                            <li>
                                <a href="#soft-skill" onClick={handleClickLink}>
                                    <FaUsers/>
                                    Soft Skill
                                    <IoChevronForward/>
                                </a> 
                            </li>
                            <li>
                                <a href="#projects" onClick={handleClickLink}>
                                    <IoDesktopOutline/>
                                    Projetos
                                    <IoChevronForward/>
                                </a> 
                            </li>
                        </>
                    ):(
                        <li>
                            <Link to="/" onClick={handleClickLink}>
                                <IoHome />
                                Home
                                <IoChevronForward/>
                            </Link>
                        </li>
                    )}
                    <li> 
                        <Link to="/contact" onClick={handleClickLink}>
                            <FaAddressBook/>
                            Contatos
                            <IoChevronForward/>
                        </Link> 
                    </li>
                    {!user && (
                        <li> 
                            <Link to="/login" onClick={handleClickLink}>
                                <FaUserLock/>
                                Acesso Admin
                                <IoChevronForward/>
                            </Link>
                        </li>
                    )}
                    {user && (
                        <>
                            <li>
                                <Link to="/dashboard" onClick={handleClickLink}>
                                    <IoTerminal />
                                    Painel
                                    <IoChevronForward/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/createcard" onClick={handleClickLink}>
                                    <IoAddCircle />
                                    Criar card
                                    <IoChevronForward/>
                                </Link>
                            </li>
                            <li>
                                <div className={styles.logout} onClick={handleClickLink}>
                                    <IoLogOutSharp />
                                    <button onClick={logout}>Sair</button>
                                    <IoChevronForward/>
                                </div>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    )
}