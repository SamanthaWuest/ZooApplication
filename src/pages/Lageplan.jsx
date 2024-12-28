import React from "react";
import { Link } from "react-router-dom";


const Lageplan = () => {
    return (
        <>
        <h1>Lageplan</h1>
    <main>
        <Link to="/Tickets">
        <button className="button">Tickets</button>
        </Link>
        <Link to="/Audioguides">
        <button className="button">Audioguides</button>
        </Link>
        <Link to="/">
        <button className="button">Home</button>
        </Link>
        <Link to="/Suchfeld">
        <button className="button">Suchfeld</button>
        </Link>
    </main>

    </>
    )
};

export default Lageplan;