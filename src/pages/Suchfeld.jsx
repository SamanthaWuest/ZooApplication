import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import HeaderSearch from "../Header/HeadSearch";


const Suchfeld = () => {
    return (
        <>
    <HeaderSearch />
    <h1>Suchfeld</h1>
    <main>
        <Link to="/Tickets">
        <button className="button">Tickets</button>
        </Link>
        <Link to="/Login">
        <button className="button">Audioguides</button>
        </Link>
        <a href="/Zooplan.pdf" target="-blank">
        <button className="button">Lageplan</button>
        </a>
        <Link to="/">
        <button className="button">Home</button>
        </Link>
    </main>

    </>
    )
};

export default Suchfeld;