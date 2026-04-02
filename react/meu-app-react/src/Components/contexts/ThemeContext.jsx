import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [tema, setTema] = useState('light');

    const alternarTema = () => 
        setTema((prev) => (prev === 'light' ? 'dark' : 'light'));

    return (
        <ThemeContext.Provider value={{ tema, alternarTema }}>
            {children}
        </ThemeContext.Provider>
    );
}

/*
    1. const [tema, setTema] = useState('light');
        -> estado

    2. <ThemeContext.Provider value={{ tema, alternarTema }}>
        -> Quer dizer que qualquer componente abaixo pode acessar isso

    3. {children}
        -> tudo que estiver dentro do Provider
*/