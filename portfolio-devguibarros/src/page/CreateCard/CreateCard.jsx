import { useState } from "react"
import styles from "./CreateCard.module.css"

const MAX_FILE_SIZE_KB = 500;

export default function CreateCard(){
    
    const [title, setTitle] = useState("")
    const [urlImage, setUrlImage] = useState("null")
    const [urlWeb, setUrlWeb] = useState("")
    const [urlGitHub, setUrlGitHub] = useState("")
    const [formError, setFormError] = useState("")
    console.log(title, urlImage, urlWeb, urlGitHub, formError)
    
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
    }

   
    
    return (
        <div className={styles.loginContainer}>
            <h1>Criar Card</h1> 
            <form onSubmit={handleSubmit}>
                <h3>Crie o card do projeto.</h3>
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
                
                <button type="submit" className="btnForm">Criar</button>
            </form>
        </div>
    )
}
 