import React from "react";
import { Link } from "react-router-dom";
import HeaderAudioguides from "../HeadAudio";



const Audioguides = () => {
    return (
        <>    
    <HeaderAudioguides />
    <h1>Audioguides</h1>


    <main>
        <button className="button01">Benutzername</button> <bl />
        <button className="button01">Passwort</button>






        <Link to="/Tickets">
        <button className="button">Tickets</button>
        </Link>
        <Link to="/">
        <button className="button">Home</button>
        </Link>
        <Link to="/Lageplan">
        <button className="button">Lageplan</button>
        </Link>
        <Link to="/Suchfeld">
        <button className="button">Suchfeld</button>
        </Link>
    </main>
</>
    )
};

export default Audioguides;