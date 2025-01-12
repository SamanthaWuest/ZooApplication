import React from "react";
import { Link } from "react-router-dom";
import HeaderAudioguides from "../Header/HeadAudio";
import { DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import Calendar from "./Calendar";


const Audioguides = () => {

    return (
        <>    
    <HeaderAudioguides />
    <h1>Audioguides</h1>
    <Link to="/Tickets">
        <button className="audioguides">Tickets</button>
        </Link>
        <Link to="/">
        <button className="audioguides">Home</button>
        </Link>
        <a href="/Zooplan.pdf" target="-blank">
        <button className="audioguides">Lageplan</button>
        </a>
        <Link to="/Suchfeld">
        <button className="audioguides">Suchfeld</button>
        </Link>

   

    <main>
        
    <div>
    <Calendar />
    </div>
    <Link to={"/Bestätigung"}>
    <button className="audioguides1">Weiter zur Bestätigung</button>
    </Link>
    </main>
</>
    )
};

export default Audioguides;