import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocument } from "../../hooks/useFetchDocument"
import { useUpdateDocument } from "../../hooks/useUpdateDocument"
import styles from "./CreateCard.module.css"




const MAX_FILE_SIZE_KB = 500;

export default function EditCard(){
    
    const {id} = useParams()
    const {document: card} = useFetchDocument("cards")

    const [title, setTitle] = useState("")
    const [urlImage, setUrlImage] = useState("")
    const [urlWeb, setUrlWeb] = useState("")
    const [urlGitHub, setUrlGitHub] = useState("")
    const [formError, setFormError] = useState("")
    
    useEffect(()=> {
        if(card){
            setTitle(card.title)
            setUrlImage(card.urlImage)
            setUrlWeb(card.urlWeb)
            setUrlGitHub(card.urlGitHub)
        }
    }, [card])

    const {updateDocument, response} = useUpdateDocument("cards")
    const { user } = useAuthValue()
    const navigate = useNavigate()
    
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setFormError("")

        if(file) {
            const fileSizeInKB = file.size / 1024
            if (fileSizeInKB > MAX_FILE_SIZE_KB){
                setFormError("O tamanho do arquivo ultrapassou o permitido de 500KB")
                return
            }
            const reader = new FileReader()

            reader.onload = (e) => {
                const imageDataUrl = e.target.result
                setUrlImage(imageDataUrl)
            }

            reader.readAsDataURL(file)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError("")
        
        if(!title || !urlImage || !urlWeb || !urlGitHub){
            setFormError("Campos não preenchidos")
            return
        }

        try {
            new URL(urlImage)
        } catch (error) {
            setFormError("O arquivo precisa ser uma imagem")
            return
        }

        if(formError){
            return
        }

        const data = {
            title,
            image: urlImage,
            urlWeb,
            urlGitHub,
            uid: user.uid
        }

        updateDocument(id, data)

        navigate("/dashboard")
    }

   
    
    return (
        <div className={styles.createCardContainer}>
            <h1>Criar Card</h1> 
            <form onSubmit={handleSubmit}>
                <h3>Criar card do projeto.</h3>
                <label>
                    <span>Titulo:</span>
                    <input 
                        type="text" 
                        name="titleProject"
                        placeholder="Digite o nome do projeto"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    <span>Imagem:</span>
                    <input 
                        type="file" 
                        name="fileImage"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </label>
                <p className={styles.textPreviewImage}>Pré-vizualização da imagem atual:</p>
                <img className={styles.previewImage} src={card.image} alt={card.title} />
                <label>
                    <span>Url Web:</span>
                    <input 
                        type="text" 
                        name="urlLink"
                        placeholder="Digite a url do link web"
                        value={urlWeb}
                        onChange={(e) => setUrlWeb(e.target.value)}
                    />
                </label>
                <label>
                    <span>Url GitHub:</span>
                    <input 
                        type="text" 
                        name="urlGitHub"
                        placeholder="Digite o nome do projeto"
                        value={urlGitHub}
                        onChange={(e) => setUrlGitHub(e.target.value)}
                    />
                </label>
                {!response.loading && <button type="submit" className="btnForm">Criar Card</button>}
                {response.loading && <button type="submit" className="btnForm">Aguarde...</button>}
            </form>
            {response.error && <h4>{response.error}</h4>}
            {formError && <h4>{formError}</h4>}
        </div>
    )
}