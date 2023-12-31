import {PropTypes} from "prop-types"
import styles from "./ProjectCard.module.css"
import { IoLogoGithub, IoGlobeOutline } from "react-icons/io5";

export default function ProjectCard({card}){
    return(
        <div className={styles.projectCard}>
            <h5>{card.title}</h5>
            <img src={card.image} alt={card.title}/>
            <div className={styles.projectCardActions}>
                <a className="btn" href={card.urlWeb}>
                    <IoGlobeOutline />
                    Link web
                </a>
                <a className="btn" href={card.urlGitHub}>
                    <IoLogoGithub />
                    GitHub
                </a>
            </div>
        </div>
    )
}
ProjectCard.propTypes = {
    card: PropTypes.string.isRequired,
}