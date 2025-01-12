export const postEvent = async (event) => {
  try {
    const response = await fetch("http://localhost:8088/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ event: event }),
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Event successfully stored: ", data);
    } else {
      console.error("Failed to store event:", response.status);
    }
  } catch (error) {
    console.error("Error during event submission:", error);
  }
};
