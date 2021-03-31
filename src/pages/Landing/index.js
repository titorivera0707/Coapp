import React from "react"
import "./style.css"
import Navbar from "../../Components/NavBar/NavigationBar"

function Landing() {

    // Onclick event handler for the login portion of the application.
    function handleLogin(e) {
        e.preventDefault();
        console.log("Login page will appear.")
    }

    // Onclick event handler for the registration portion of the application.
    function handleRegister(e) {
        e.preventDefault();
        console.log("Registration page will appear.")
    }

    return(
        <div>

            {/* Simple Navbar that will most likely be changed later on but for now just to give us an idea of what will be there. */}
            <Navbar />

            <button className="btnShp" onClick={handleLogin}>Login</button>
            <button className="btnShp" onClick={handleRegister}>Register</button>

        </div>
    )
}

export default Landing