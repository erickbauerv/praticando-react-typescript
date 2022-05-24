import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import {Login} from "../pages/Login/index"

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary">Teste</Button>}/>
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    )
};