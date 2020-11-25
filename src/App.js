import React, { Component } from 'react'


export default class App extends Component {
    state ={
        change : false
    }
    clickChange =()=>{
        this.setState({change: true});
    };

    render() {
        const buttonChange = {
            Color: "RED",
            backgroundColor : "orange",
            margin: "12%",
            borderRadius : "12%"
        };

        if(this.setState.change){
            buttonChange.backgroundColor = "purple";
        }
        return (
            <div>
                <button onClick={this.clickChange} style={buttonChange}>click Me</button>
            </div>
        )
    }
}
