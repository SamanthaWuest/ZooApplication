import React from "react";
import HeaderLogin from "../Header/HeaderLogin";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <>
    <HeaderLogin />
    <h1>Login</h1>
    <main>

    <form>
        <button className="button01">Benutzername:</button> <bl />
        <input type="text" />
    </form>

    <form>
        <button className="button01">Passwort:</button>
        <input type="text" />
    </form>

        <Link to="/Audioguides">
        <button className="Login1">Login</button>
        </Link>

    
    </main>

    </>
    )
};

export default Login;