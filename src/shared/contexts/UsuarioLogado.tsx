import { createContext } from "react"

interface IUsuarioLogadoContextData{
    nomeUsuario: string;
}

interface IChildren{
    children: React.ReactNode
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IChildren> = ({children}) => {
    return(
        <UsuarioLogadoContext.Provider value={{nomeUsuario: "Lucas"}} >
            {children}
        </UsuarioLogadoContext.Provider>
    );
}