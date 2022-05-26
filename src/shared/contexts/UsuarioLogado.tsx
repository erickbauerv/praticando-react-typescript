import { createContext, useCallback, useEffect, useState } from "react"

// interface com os dados que o context vai prover
interface IUsuarioLogadoContextData{
    nomeUsuario: string;
    logout: () => void;
}

interface IChildren{
    children: React.ReactNode
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IChildren> = ({children}) => {
    const [nome, setNome] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setNome("Lucas")
        }, 1000);
    });

    const handleLogout = useCallback(() => {
        console.log("Logout executou")
    }, [])

    return(
        // O context disponibiliza os dados para as tags que for children dele
        <UsuarioLogadoContext.Provider value={{nomeUsuario: nome, logout: handleLogout}} >
            {children}
        </UsuarioLogadoContext.Provider>
    );
}