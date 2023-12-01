import {
    getAuth,
    signInWithEmailAndPassword,
    singOut
} from "firebase/auth"
import { useState, useEffect } from "react"

export default function useAuthentication(){
    const[error, setError] = useState(null)
    const[loading, setLoading] = useState(null)
    const[cancelled, setCancelled] = useState(false)
    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }

    const login = async(data) =>{
        
        checkIfIsCancelled()

        setLoading(true)
        setError(false)
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
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

        singOut(auth)
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

