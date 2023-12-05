import HardSkillsIcons from "../../components/HardSkillsIcons";
import { iconsHardSkills } from "../../components/iconsHardSkills";
import DevImg from "../../img/devimg.jpg"
import styles from "./Home.module.css"
import { IoDocumentAttach, IoPhonePortraitOutline} from "react-icons/io5";


export default function Home(){
    
    function createdIconsHardSkills({name, img}){
        return(
            <HardSkillsIcons
                img={img}
                name={name}
            />
        )
    }
    
    return(
        <div className={styles.homeContainer}>
            <div className={styles.aboutMe}>
                <img src={DevImg} alt="Foto digital do desenvolvedor"/>
                <div className={styles.aboutMeInfo}>
                    <h1>Sobre Mim</h1>
                    <p>
                        Olá, me chamo Guilherme Soares de Barros, trabalhei mais de 7 anos como bancário porém, encontrei no setor de tecnologia a minha paixão. Atualmente venho trabalhando em projetos pessoais para desenvolver um portfólio de apresentação. tenho como hobbies estudar novas tecnologias, praticar esportes, escutar musica e viajar.
                    </p>
                    <h3>Vamos trabalho juntos?</h3>
                    <div className={styles.aboutMeActions}>
                        <button>
                            <IoPhonePortraitOutline />
                            contate-me
                        </button>
                        <button>
                            <IoDocumentAttach />
                            currículo
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.hardSkills}>
                <h1>Hard Skill</h1>
                <div className={styles.iconsHardSkills}>
                   {iconsHardSkills.map(createdIconsHardSkills)}
                </div> 
            </div>
            <hr />
            <div className={styles.softSkills}>
                <h1>Soft Skills</h1>
                <p>
                    Facilidade de aprendizagem, boa comunicação, criativo, dinâmico, pró ativo, fácil convívio. Procuro sempre trabalhar da melhor forma possível, objetivando o aprendizado constante de novas ferramentas para construir um conhecimento sólido.
                </p>
            </div>
        </div>
    )
}