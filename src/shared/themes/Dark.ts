import { createTheme } from "@mui/material";
import { cyan, purple } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette:{
        mode: 'dark',
        primary:{
            main: purple[700],
            dark: purple[800],
            light: purple[500],
            contrastText: "#ffffff"
        },
        secondary:{
            main: cyan[700],
            dark: cyan[800],
            light: cyan[500],
            contrastText: "#ffffff"
        },
        background:{
            paper: "#303134",
            default: "#202124"
        }
    },
    typography: {
        allVariants:{
            color: 'white',
        }
    }
})