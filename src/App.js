import React, { Component } from 'react'
import User from './User';
import Student from './Student';

export default class App extends Component {
    state ={
        isLogged : false
    }

    clickSignup= () =>{
        this.setState({isLogged:true});
    };

    clickLogout =() =>{
        this.setState({isLogged:false});
    };
    render(){
        const isLogged = this.props.isLogged;
        if (isLogged) {
            return<User  clickData={this.clickLogout}/>;
        }
        else{
            return<Student clickData={this.clickSignup}/>;
        }
    }
        
}
