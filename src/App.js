import React, { Component } from 'react'

export default class App extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        color: "",
        phonenumber: "",
        list: [],
        isEditableIndex: null
    };

    handleChange = e => {
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

    handleSubmit = () => {
        debugger
        const { firstName, lastName, email, list } = this.state
        // if (!localStorage.getItem('data')) {
        list.push({
            firstName: firstName,
            lastName: lastName,
            email: email
        });
        this.setState({ list })
        console.log(this.state)
    };
    deletee = (index) => {
        const { list } = this.state
        list.splice(index, 1);
        this.setState({ list })
    }

    updatee = (index) => {
        const { list } = this.state
        this.state.firstName = list[index].firstName;
        this.state.lastName = list[index].lastName;
        this.setState({ isEditableIndex: index })
    }

    render() {
        return (
            <div>
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

                <button onClick={this.handleSubmit}>Submit</button><br /><br />

                <table border="1px solid">
                    <thead>
                        <tr>
                            <th>firstName</th>
                            <th>LastName</th>
                            <th>E-mail</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.list.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={() => { this.updatee(index) }}>Edit</button>
                                        <button onClick={() => { this.deletee(index) }}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            </div>
        )
    }
}
