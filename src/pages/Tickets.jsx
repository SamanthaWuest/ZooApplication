import React from "react";
import { Link } from "react-router-dom";


const Tickets = () => {
    return (
        <>
        <h1>Tickets</h1>

    <main>
        <Link to="/">
        <button className="button">Home</button>
        </Link>
        <Link to="/Audioguides">
        <button className="button">Audioguides</button>
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

export default Tickets;