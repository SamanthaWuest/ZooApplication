import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderConfirmation from "../Header/HeadConfirmation";


const Bestätigung = () => {

    const [ email, setEmail ] = useState('');
    const [ eventName, setEventName ] = useState('');


    useEffect(() => {
      const fetchData = async () => {
        const endpoint = "http://localhost:8088/confirmation";
        try{
          const response = await fetch(endpoint, {
            method: "GET",
            credentials: "include",
          });

          if (response.ok) {
            const data = await response.json();
            console.log("Daten vom Backend:", data);
            setEmail(data.email);
            setEventName(data.eventName);
          } else {
            console.log(`Error fetching data: ${response.status}`);
          }
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);


        const handleInputEmail = (event) => {
          setEmail(event.target.value);
      }
      
      const handleInputEvent = (event) => {
          setEventName(event.target.value);
      }



    return (
        <>
    <HeaderConfirmation />
    <main>
        <h1>Bestätigung</h1>




        <p>Email: {email}</p>
        <p>Event: {eventName}</p>


        <Link to="/">
        <button className="button">Home</button>
        </Link>
    </main>

    </>
    )
};

export default Bestätigung;