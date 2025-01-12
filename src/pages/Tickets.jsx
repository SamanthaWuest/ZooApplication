import React from "react";
import { Link } from "react-router-dom";
import HeaderTickets from "../Header/HeadTickets";


const Tickets = () => {
    return (
        <>
        <HeaderTickets />
    <main>
    <h1>Tickets</h1>
        <Link to="/">
        <button className="button">Home</button>
        </Link>
        <Link to="/Login">
        <button className="button">Audioguides</button>
        </Link>
        <a href="/Zooplan.pdf" target="-blank">
        <button className="button">Lageplan</button>
        </a>
        <Link to="/Suchfeld">
        <button className="button">Suchfeld</button>
        </Link>
    </main>

        
        
        </>
    ) 
};

export default Tickets;