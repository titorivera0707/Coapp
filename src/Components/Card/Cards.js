import React from 'react'
import "./Cards.css"
import Bm from "../../Assets/MB.jpeg"
import { Card } from 'react-bootstrap'

function Cards() {
    return (
        
        <Card>
            <Card.Img className="CardPic" variant="top" src={Bm} />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    )
}

export default Cards
