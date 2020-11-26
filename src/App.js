import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        color: "",
        phonenumber: ""
    };
    handleChange = e => {

        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    isValidate = () => {
        const isValid = this.validation();
        if (isValid) {
            console.log(this.state);
        }
    };

    validation = () => {
        if (!this.state.firstName) {
            window.alert("enter first name!")
            return false;
        }
        if (!this.state.lastName) {
            alert("enter last name!")
        }
        if (!this.state.email.includes("@")) {
            alert('Invalide email!')
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.isValidate}>
                    <h1>Registration form</h1>
                    First name:<input type="text" value={this.state.fname} name="firstName" onChange={this.handleChange} /><br /><br />

                    Last name:<input type="text" value={this.state.lname} name="lastName" onChange={this.handleChange} /><br /><br />

                    E-mail:<input type="text" value={this.state.email} name="email" onChange={this.handleChange} /><br /><br />

                    Address:<textarea type="text" value={this.state.address} name="address" onChange={this.handleChange} /><br /><br />

                    Gender:<input type="radio" name="gender" />Male
                           <input type="radio" name="gender" />Female<br /><br />

                    Hobbies:<input type="checkbox" />Drawing
                            <input type="checkbox" />Skating
                            <input type="checkbox" />Coding
                            <input type="checkbox" />Swimming
                            <input type="checkbox" />Dancing<br /><br />

                    Favroute Color:<select value={this.state.color} name="color" onChange={this.handleChange}>
                        <option value="Red">Red</option>
                        <option value="green">Green</option>
                        <option value="Black">Black</option>
                        <option value="lightred">lightred</option>
                        <option value="lightgreen">lightgreen</option>
                    </select><br /><br />

                    Phone Number :
                    <input type="tel" maxlength="10" value={this.state.phonenumber} onChange={this.handleChange} name="phonenumber" /> <br /><br />

                    <button type="submit" id="btnsubmit">Submit</button>
                </form>
            </div>
        )
    }
}
