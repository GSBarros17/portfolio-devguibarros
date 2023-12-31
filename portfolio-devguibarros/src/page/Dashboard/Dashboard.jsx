import { Link } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useDeleteDocument } from "../../hooks/useDeleteDocuments"
import styles from "./Dashboard.module.css"


export default function Dashboard(){
    
    const {user} = useAuthValue()
    const uid = user.uid
    const {documents: cards, loading} = useFetchDocuments("cards",uid)
    const {deleteDocument} = useDeleteDocument("cards")

    if(loading){
        return <p>carregando...</p>
    }
    
    return (
        <div className={styles.dashboardContainer}>
            <h1>Painel</h1>
            <div className={styles.cardsInfo}>
                <span>Título</span>
                <span>Ações</span>
            </div>
            {cards && cards.map((card) => 
                <div key={card.id} className={styles.cardsDetails}>
                    <h5>{card.title}</h5>
                    <div className={styles.cardsAction}>
                        <Link className="btn" to={`/editcard/${card.id}`}>Editar</Link>
                        <button className="btn" onClick={()=> deleteDocument(card.id)}>Excluir</button>
                    </div>
                </div>
            )}
        </div>
    )
}