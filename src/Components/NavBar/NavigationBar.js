import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import './NavigationBar.css'

function NavigationBar() {

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
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Pup Match</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#matchme">MatchMe</Nav.Link>
                    <Nav.Link href="#explore">Explore</Nav.Link>
                </Nav>
                <div>

            {/* Simple Navbar that will most likely be changed later on but for now just to give us an idea of what will be there. */}
            <Navbar />

            <button className="btnShp" onClick={handleLogin}>Login</button>
            <button className="btnShp" onClick={handleRegister}>Register</button>

        </div>
            </Navbar>
        </div>
    )
}

export default NavigationBar