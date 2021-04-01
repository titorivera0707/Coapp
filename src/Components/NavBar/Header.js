import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import './Header.css'
import ModalComp from "../Modal/ModalComp"

function Header() {

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
                <Navbar.Brand href="/">Pup Match</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/matchMe">Match Me</Nav.Link>
                    <Nav.Link href="/explore">Explore</Nav.Link>
                </Nav>
                <div>

            <button className="btnShp" onClick={handleLogin}>Login</button>
            <button className="btnShp" onClick={handleRegister}>Register</button>
        </div>
            </Navbar>

            <ModalComp
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
    )
}

export default Header