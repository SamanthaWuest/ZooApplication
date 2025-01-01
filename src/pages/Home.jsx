import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
    <Header />
    <main>
        <h1>Homepage</h1>
        <Link to="/Tickets">
        <button className="button">Tickets</button>
        </Link>
        <Link to="/Login">
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

export default Home;