import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderConfirmation from "../Header/HeadConfirmation";


const Bestätigung = () => {

    const [ email, setEmail ] = useState('');
    const [ event, setEvent ] = useState(null);


    useEffect(() => {
      const fetchData = async () => {
        const endpoint = "http://localhost:8088/confirmation";
        try{
          const response = await fetch(endpoint, {
            method: "GET",
            credentials: "include",
            headers:  {
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            const data = await response.json();
            console.log("Daten vom Backend:", data);
            setEmail(data.email || '');
            setEvent(data.event || null);
          } else {
            console.log(`Error fetching data: ${response.status}`);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);

    return (
        <>
    <HeaderConfirmation />
    <main>
        <h1>Bestätigung</h1>
        <p><strong>Email: </strong>{email}</p>
        <div>
          <h2>Event:</h2>
          {event ? (
            <div>
              <p><strong>Start:</strong> {new Date(event.start).toLocaleString()}</p>
              <p><strong>Ende:</strong> {new Date(event.end).toLocaleString()}</p>
              <p><strong>Beschreibung:</strong> {event.text}</p>
            </div>
          ) : (
            <p>Kein Event verfügbar</p>
          )}
        </div>
        <Link to="/">
        <button className="button">Home</button>
        </Link>
    </main>

    </>
    );
};

export default Bestätigung;

