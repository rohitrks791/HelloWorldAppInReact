import React from "react"
import "./style.css"
import Button from "./Button.js"

const App=()=>{
    return(
            <div className="container">
                <h1 style={{textAlign:"Center",}}><span>H</span>ello World</h1>
                <p><span className="rspan">R</span>eact is a JavaScript library for building user interfaces.</p>
                <Button buttonText = "Declarative"/>
                <Button buttonText = "Component Based"/>
                <Button buttonText = "Learn Once, Write Anywhere"/>
            </div>
    )
}

export default App
