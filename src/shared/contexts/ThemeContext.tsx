import { createContext } from "react";
import { DarkTheme } from "../themes";

interface IThemeContextData{
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

// export const AppThemeProvider: React.FC = ({ children }) => {

//     return(
//         <ThemeContext.Provider value = {{ themeName, toggleTheme }}>
//             <ThemeProvider theme = {DarkTheme}>
//                 {children}
//             </ThemeProvider>
//         </ThemeContext.Provider>
//     );
// }