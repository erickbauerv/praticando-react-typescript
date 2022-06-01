import { createContext, useCallback, useContext, useState } from "react";

// interface para conseguir utilizar o children
interface IProps {children: React.ReactNode}

// interface com os dados da context
interface IDrawerContextData{
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

// Criar um objeto context do tipo da interfaces IDrawerContextData
const DrawerContext = createContext<IDrawerContextData>({} as IDrawerContextData);

// hook customizado para usar o useContext
export const useDrawerContext = () => {
    return useContext(DrawerContext);
}


export const DrawerProvider: React.FC<IProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); 

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, [])

    return(
        // Disponibiliza os dados da context para os components children
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
          {children}
        </DrawerContext.Provider>
    );
}