import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";


const ZeitslotPerson = () => {
    return (
        <>
    <Header />
    <main>
        <h1>Zeitslot Person</h1>
        <Link to="/Tickets">
        <button className="button">Tickets</button>
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

export default ZeitslotPerson;