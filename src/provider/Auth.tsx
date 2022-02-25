import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import api from '../services/api'
import Cookie from 'universal-cookie'

type User = {
    name: string 
}

type AuthContextType = {
    isAuthenticated: boolean
    user: User | null
    signIn: (data: SignInData) => Promise<void>
    logOut: () => void

}

type SignInData = {
    username: string
    password: string 
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User | null>(null)
    const navigate = useNavigate()

    const isAuthenticated = !!user
    const authCookie = new Cookie()

    useEffect(() => {
        const token = authCookie.get("dashyauth.cookie")

        if (token) {
            navigate("../dashboard", { replace: true })
        } else {
            setUser(null) 
            navigate("/", { replace: true })
        }
    }, [])

    async function signIn({ username, password }: SignInData) {
        const { token } = await api.post(
            "/login",
            {
                username, 
                password
            }
        ).then(response => response.data.data)

        authCookie.set("dashyauth.cookie", token, {
            maxAge: 60 * 60 * 1 // 1 hour 
        })

        setUser({name: username})

        navigate("../dashboard", { replace: true })
    }

    function logOut() {
        setUser(null)
        authCookie.remove("dashyauth.cookie")
        navigate("/", { replace: true })
    }


    return (
        <AuthContext.Provider value={{ user, signIn, isAuthenticated, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}