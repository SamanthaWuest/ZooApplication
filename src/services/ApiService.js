import React from "react";
const base = "http://localhost:3000";

const registerUser = async (email, password) => {
  const endpoint = "http://localhost:8088/registration";
  const data = { email, password };

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
      console.log("User registered successfully!");
    } else if (response.status === 401) {
      console.log("User already exists or credentials are invalid.");
    } else {
      console.log(`Error: ${response.status}`);
    }
  } catch (error) {
    console.log("Request failed:", error);
  }
};

registerUser("example@example.com", "securePassword123");

/*export const submitLogin = useCallback(
  async (email, password, onCatch, navigate) => {
    try {
      const response = await fetch(`${base}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      switch (response.status) {
        case 200:
          console.log("Registration success");
          navigate("/");
          break;
        case 401:
          console.log("Credentials are wrong");
          // TODO: Show snackbar or popup
          break;
        case 500:
          console.log("Server down");
          // TODO: Show snackbar or popup
          break;
        default:
          console.log("Unexpected response");
      }
    } catch (error) {
      console.error("Error:", error);
      onCatch();
    }
  },
  []
);

//return { submitLogin };

/*import React from "react";

const base = "http://localhost:3000";
export const submitLogin = async (email, password, onCatch, navigate) => {
  try {
    const response = await fetch(`${base}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    switch (response.status) {
      case 200:
        console.log("Login success");
        navigate("/");
        break;
      case 401:
        console.log("Credentials are wrong");
        // TODO: Show snackbar or popup
        break;
      case 500:
        console.log("Server down");
        // TODO: Show snackbar or popup
        break;
      default:
        console.log("Unexpected response");
    }
  } catch (error) {
    console.error("Error:", error);
    onCatch();
  }
};*/
