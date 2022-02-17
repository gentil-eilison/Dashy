import { createContext, useState } from 'react'

const AuthContext = createContext({})

type AuthProviderData = {
    username: string 
    password: string
    children: any
}

const AuthProvider = (props: AuthProviderData) => {
    const [user, setUser] = useState<Object>()

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider