import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import {Login} from "../pages/Login/index"
import { useAppThemeContext } from "../shared/contexts";

export function AppRoutes() {
    const { toggleTheme } = useAppThemeContext();

    return(
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Toggle Theme</Button>}/>
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    )
};