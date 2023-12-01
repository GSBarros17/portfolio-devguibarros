import {
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"
import { app } from "../firebase/config"
import { useState, useEffect } from "react"

export default function useAuthentication(){
    const[error, setError] = useState(null)
    const[loading, setLoading] = useState(null)
    const[cancelled, setCancelled] = useState(false)
    const auth = getAuth(app)
   
    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }

    const login = async(email , senha) =>{
        
        checkIfIsCancelled()

        setLoading(true)
        setError(false)
        try {
            await signInWithEmailAndPassword(auth, email, senha)
            setLoading(true)
        } catch (error) {
            let systemErrorMessage
            if (error.message) {
                systemErrorMessage = "Ocorreu um erro tente mais tarde"
            }
        setLoading(false)
        setError(systemErrorMessage)
        }
    }

    const logout = () => {
        checkIfIsCancelled()

        signOut(auth)
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return{
        auth,
        error,
        loading,
        login,
        logout
    }

}

