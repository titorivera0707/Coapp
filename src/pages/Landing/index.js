import React from "react"
import { Navbar, Nav } from 'react-bootstrap'

function Landing() {

    return(
        <div>

            {/* Simple Navbar that will most likely be changed later on but for now just to give us an idea of what will be there. */}
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Pup Match</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">MatchMe</Nav.Link>
                    <Nav.Link href="#pricing">Explore</Nav.Link>
                </Nav>
            </Navbar>

            

        </div>
    )
}

export default Landing