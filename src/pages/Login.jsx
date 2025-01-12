import { React, useState } from "react";
import HeaderLogin from "../Header/HeaderLogin";
import { Link, redirect, useNavigate } from "react-router-dom";
import { use } from "react";


const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();

    const handleRegistration = async (event) => {
        event.preventDefault();
            const endpoint = "http://localhost:8088/registration";
            const data = {email, password};
            
          
            try {
              const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                credentials: "include",
              });
          
              if (response.ok) {
                alert("User registered successfully!");
                navigate('/Audioguides');
              } else if (response.status === 401) {
                alert("User already exists or credentials are invalid.");
              } else {
                console.log(`Error: ${response.status}`);
              }
            } catch (error) {
              console.log("Request failed:", error);
            }
          };
    
    const handleInputChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    
    const handleInputChangePassword = (event) => {
        setPassword(event.target.value);
    }


    return (
        <>
    <HeaderLogin />
    <h1>Login</h1>
    <main>

    <form>
        <button className="button01">Email:</button> <bl />
        <input type="email" id="email" name="email" className="Inputfield" required onChange={handleInputChangeEmail} />
    </form>
        <br />
    <form>
        <button className="button01">Passwort:</button>
        <input type="password" id="password" name="password" className="Inputfield" required onChange={handleInputChangePassword}/>
    </form>
        <br />
        <button className="Login1" onClick={handleRegistration}>Login</button>
        <Link to={"/"}><button className="Login1">Home</button></Link>
    </main>

    </>
    )
};

export default Login;
