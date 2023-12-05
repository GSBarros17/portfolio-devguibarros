import {PropTypes} from "prop-types"

export default function ProjectCard({card}){
    return(
        <div>
            <h5>{card.title}</h5>
            <img src={card.image} alt={card.title}/>
            <div>
                <a href={card.urlWeb}>Link web</a>
                <a href={card.urlGitHub}>GitHub</a>
            </div>
        </div>
    )
}
ProjectCard.propTypes = {
    card: PropTypes.string.isRequired,
}