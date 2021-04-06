import React from 'react'
import "./Explore.css"
import { CardColumns } from "react-bootstrap"
import Cards from "../../components/Card/Cards"

function Explore() {
    return (
        <div className="columns">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </div>
    
    )
}

export default Explore
