import React, { Component } from 'react'
import Student from './Student'

export default class App extends Component {
    render() {
        const primeMember = this.props.primeMember;


        return (
           <React.Fragment>
               <h1>Wlcome User</h1>
               {primeMember && <Student/>}
           </React.Fragment>
        )
    }
}
export default  App;