import React from "react"
import { Nav } from "react-bootstrap"
import './Header.css'
import ModalComp from "../Modal/ModalComp"
import logo from '../../Assets/logo_transp.png';

function Header() {

    const [modalShow, setModalShow] = React.useState(false);

    return(
        <div className="ModalComp__header">
      
         <img src= {logo} alt="logo"/>
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/matchMe">Match Me</Nav.Link>
        <Nav.Link href="/explore">Explore</Nav.Link>
        </Nav>
            <div>
        </div>
        <ModalComp
        show={modalShow}
        onHide={() => setModalShow(false)}
      />


   
        </div>
    )
}

export default Header