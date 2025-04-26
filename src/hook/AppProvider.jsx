import React, {createContext, useContext, useState} from 'react'

// Create a context for global state
export const AppContext = createContext(null)

// Create hook to use the context
export const useAppContext = () => useContext(AppContext)

export const AppProvider = ({children}) => {
    const [collapsed, setCollapsed] = useState(false)
    const [darkMoood, setDarkMood] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const login = (username) => {
        setIsLoading(true)
        setTimeout(()=>{setUser(username)
            setIsLoading(false)
            alert.success(`Welcome, ${username}!`)},100)
    }
    const logout = () => {
        setUser(null)
        alert.info('Logged out successfully')
    }
const appContextValue = {
        collapsed,  setCollapsed,  darkMoood, setDarkMood,
        user, setUser, isLoading, setIsLoading, login, logout
}
return (
    <AppContext.Provider
    value={appContextValue}
    >
    {children}
    </AppContext.Provider>
)
}