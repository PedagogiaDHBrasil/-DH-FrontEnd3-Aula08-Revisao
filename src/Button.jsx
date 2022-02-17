import React, { Component } from 'react'
import "./Random.css"

export default class Button extends Component {
    
message = () => alert("ME PASSA UMA FUNÇÃO!")

    render() {
        return (
            <button onClick={typeof this.props.fn === "function" ? this.props.fn  : this.message} className="glow-on-hover">Get Random</button>
        )
    }
}
