import { createTheme } from "@mui/material";
import { cyan, purple } from "@mui/material/colors";
import { palette } from "@mui/system";

export const LightTheme = createTheme({
    palette:{
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
            paper: "#ffffff",
            default: "#f7f6f3"
        }
    }
})