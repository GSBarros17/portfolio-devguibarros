import { useState } from "react"
import styles from "./Login.module.css"

export default function Login(){
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
    }
    
    return (
        <div className={styles.loginContainer}>
            <h1>Login</h1> 
            <form onSubmit={handleSubmit}>
                <h2>Área de login Admin</h2>
                <label>
                    <span>E-mail:</span>
                    <input 
                        type="email" 
                        name="emailAdmin"
                        placeholder="Digite o e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input 
                        type="password" 
                        name="passwordAdmin"
                        placeholder="Digite a senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label> 
            </form>
        </div>
    )
}