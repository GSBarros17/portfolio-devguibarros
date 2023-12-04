import DevImg from "../../img/devimg.jpg"
import styles from "./Home.module.css"

export default function Home(){
    return(
        <div className={styles.homeContainer}>
            <div className={styles.aboutMe}>
                <img src={DevImg} alt="Foto digital do desenvolvedor"/>
                <div className={styles.aboutMeInfo}>
                    <h1>Sobre Mim</h1>
                    <p>
                        Olá, me chamo Guilherme Soares de Barros, trabalhei mais de 7 anos como bancário porém,
                        encontrei no setor de tecnologia a minha paixão. Atualmente venho trabalhando em projetos
                        pessoais para desenvolver um portfólio de apresentação. tenho como hobbies estudar novas
                        tecnologias, praticar esportes, escutar musica e viajar.
                    </p>
                    <h3>Vamos trabalho juntos?</h3>
                    <div>
                        <button>
                            contate-me
                        </button>
                        <button>
                            currículo
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}