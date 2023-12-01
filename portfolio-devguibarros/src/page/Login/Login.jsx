import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuthentication from "../../hooks/useAuthentication"
import styles from "./Login.module.css"

export default function Login(){
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    
    const {login, error: authError, loading} = useAuthentication()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefalt()

        setError("")

        const user = {
            email,
            password
        }

        if (email.trim() === "" || password.trim() === "") {
            setError("Preencha todos dos campos")
            return
        }
        const res = await login(user)
        console.log(res)

        navigate("/")
    }

    useEffect(() => {
        if(authError){
            setError(authError)
        }
    },[authError])
    
    return (
        <div className={styles.loginContainer}>
            <h1>LOGIN</h1> 
            <form onSubmit={handleSubmit}>
                <h3>ÁREA DE LOGIN ADIM</h3>
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
                {!loading && <button type="submit" className="btnForm">Entrar</button>}
                {loading && <button type="submit" className="btnForm">Aguarde...</button>}
            </form>
            {error && <h4>{error}</h4>}
        </div>
    )
}