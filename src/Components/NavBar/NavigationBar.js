import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import './NavigationBar.css'
import Modall from "../Modal/Modal"

function NavigationBar() {

    const [modalShow, setModalShow] = React.useState(false);

    // Onclick event handler for the login portion of the application.
    function handleLogin(e) {
        e.preventDefault();
        console.log("Login page will appear.")
        setModalShow(true)
    }

    // Onclick event handler for the registration portion of the application.
    function handleRegister(e) {
        e.preventDefault();
        console.log("Registration page will appear.")
        setModalShow(true)
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

            <button className="btnShp" onClick={handleLogin}>Login</button>
            <button className="btnShp" onClick={handleRegister}>Register</button>

        </div>
            </Navbar>

            <Modall
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
    )
}

export default NavigationBar