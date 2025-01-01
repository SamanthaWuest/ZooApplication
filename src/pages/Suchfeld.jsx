import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import HeaderSearch from "../Header/HeadSearch";


const Suchfeld = () => {
    return (
        <>
    <h1>Suchfeld</h1>
    <HeaderSearch />
    <main>
        <Link to="/Tickets">
        <button className="button">Tickets</button>
        </Link>
        <Link to="/Audioguides">
        <button className="button">Audioguides</button>
        </Link>
        <Link to="/Lageplan">
        <button className="button">Lageplan</button>
        </Link>
        <Link to="/">
        <button className="button">Home</button>
        </Link>
    </main>

    </>
    )
};

export default Suchfeld;