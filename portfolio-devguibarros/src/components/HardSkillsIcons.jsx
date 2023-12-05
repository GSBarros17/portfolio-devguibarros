import { PropTypes } from "prop-types"
import styles from "./HardSkillsIcons.module.css"

export default function HardSkillsIcons({name, img}){
    return(
        <div className={styles.cardHardSkills}>
            <img src={img} alt={name} />
            <h5>{name}</h5>
        </div>
    )
}
HardSkillsIcons.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }