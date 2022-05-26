import { useRef } from "react";
import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";


export const Dashboard = () => {
    const counterRef = useRef(0);

    const { nomeUsuario, logout} = useUsuarioLogado();

    return(
        <div>
            <p>Dashboard</p>

            <p>{nomeUsuario}</p>

            <p>Contador: {counterRef.current}</p>

            <button onClick={() => counterRef.current++}>Somar</button>
            <button onClick={() => console.log(counterRef.current)}>Log</button>

            <button onClick={logout}>Logout</button>

            <Link to="/login">Login</Link>
        </div>
    )
}