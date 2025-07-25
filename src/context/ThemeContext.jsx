import React , {createContext, useEffect, useState } from 'react'



export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
    const [theme ,setTheme ] = useState("light")


    useEffect(() =>{
        const savedTheme = localStorage.getItem('theme')
        if(savedTheme){
            setTheme(savedTheme)
        }
    }, [])


    const toggleTheme = () =>{
        setTheme((prevTheme)=>{
            const newTheme = prevTheme === 'light'? 'dark' :'light'
            localStorage.setItem('theme',newTheme)
            return newTheme
        })
    }


    return (
        <ThemeContext.Provider value={{theme ,toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}