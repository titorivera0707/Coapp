import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import './Header.css'
import ModalComp from "../Modal/ModalComp"
import logo from '../../Assets/logo_transp.png';

function Header() {

    const [modalShow, setModalShow] = React.useState(false);

    return(
        <div className="ModalComp__header">
        <Navbar expand="lg">
         <Nav.Link href='/'><img src ={logo} alt="logo" style={{"objectFit": "contain", "height":"6rem"}}/></Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" variant="outline-secondary"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/matchMe">Match Me</Nav.Link>
        <Nav.Link href="/explore">Explore</Nav.Link>
        </Nav>
        <div className="ModalComp">
        <ModalComp show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
       </Navbar.Collapse>   
        </Navbar>
        </div>
    )
}

export default Header