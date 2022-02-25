import { createContext, useState } from 'react'
import api from '../services/api'
import Cookie from 'universal-cookie'

type User = {
    name: string 
}

type AuthContextType = {
    isAuthenticated: boolean
    user: User | null
    signIn: (data: SignInData) => Promise<void>

}

type SignInData = {
    username: string
    password: string 
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User | null>(null)

    const isAuthenticated = !!user

    async function signIn({ username, password }: SignInData) {
        const { token } = await api.post(
            "/login",
            {
                username, 
                password
            }
        ).then(response => response.data.data)

        const authCookie = new Cookie()
        authCookie.set("dashyauth.cookie", token, {
            maxAge: 60 * 60 * 1 // 1 hour 
        })

        setUser({name: username})
    }


    return (
        <AuthContext.Provider value={{ user, signIn, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}