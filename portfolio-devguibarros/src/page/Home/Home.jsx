import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import HardSkillsIcons from "../../components/HardSkillsIcons"
import ProjectCard from "../../components/ProjectCard"
import { iconsHardSkills } from "../../components/iconsHardSkills"
import { IoDocumentAttach, IoPhonePortraitOutline} from "react-icons/io5"
import { useTheme } from "../../context/themeContext"
import DevImg from "../../img/devimg.webp"
import Docdev from "../../doc/guilherme-curriculo.pdf"
import styles from "./Home.module.css"




export default function Home(){
    
    const {documents: cards, loading} = useFetchDocuments("cards")
    const {isLightMode} = useTheme()

    function createdIconsHardSkills({id, name, img}){
        return(
            <HardSkillsIcons
                key={id}
                img={img}
                name={name}
            />
        )
    }
    
    return(
        <div className={styles.homeContainer}>
            <div id="sobre-mim" className={styles.aboutMe}>
                <div className={styles.aboutMeImg}>
                    <img src={DevImg} alt="Foto digital do desenvolvedor"/>
                </div>
                <div className={styles.aboutMeInfo}>
                    <h1>Sobre Mim</h1>
                    <p>
                        Olá, me chamo Guilherme Soares de Barros, trabalhei mais de 7 anos como bancário, porém encontrei no setor de tecnologia a minha paixão. Atualmente venho trabalhando em projetos pessoais para desenvolver um conhecimento relevante sobre as tecnologias apresentadas neste portfólio. Tenho como passatempo aprender sobre novas tecnologias por meio de vídeos, ler livros, assistir séries e filmes, praticar esportes, escutar musica e viajar. Meu foco é conseguir minha primeira vaga como desenvolvedor front-end jr, mas quero me aperfeiçoar até atingir nível de full stack sênior!
                    </p>
                    <h4>Vamos trabalhar juntos?</h4>
                    <div className={styles.aboutMeActions}>
                        <a className="btn" href="https://wa.me/5561999767446">
                            <IoPhonePortraitOutline />
                            contate-me
                        </a>
                        <a className="btn" href={Docdev}>
                            <IoDocumentAttach />
                            currículo
                        </a>
                    </div>
                </div>
            </div>
            <hr className={`${styles.lineLightHome} ${isLightMode ? styles.light : ""}`}/>
            <div className={styles.skillsComponent}>
                <div id="hard-skill" className={styles.hardSkills}>
                    <h1>Hard Skill</h1>
                    <div className={styles.iconsHardSkills}>
                    {iconsHardSkills.map(createdIconsHardSkills)}
                    </div> 
                </div>
                <hr className={`${styles.lineLightHome} ${isLightMode ? styles.light : ""}`}/>
                <div id="soft-skill" className={styles.softSkills}>
                    <h1>Soft Skills</h1>
                    <p>
                        Facilidade de aprendizagem, boa comunicação, criativo, dinâmico, pró ativo, fácil convívio. Procuro sempre trabalhar da melhor forma possível, objetivando o aprendizado constante de novas ferramentas para construir um conhecimento sólido.
                    </p>
                </div>
            </div>
            <hr className={`${styles.lineLightHome} ${isLightMode ? styles.light : ""}`} />
            <div id="projects" className={styles.projects}>
                <h1 >Projetos</h1>
                <div className={styles.projectsCards}>
                    {loading && <p>carregando...</p>}
                    {cards && cards.map((card) => (
                        <ProjectCard key={card.id} card={card}/>
                    ))}
                </div>
            </div>
        </div>
    )
}