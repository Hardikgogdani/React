import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        color: "",
        gender: "",
        phonenumber: "",
        hobbies: "",
        list: [],
        isEditableIndex: null
    };
    setGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    };
    setCheck = (e) => {
        console.log(e.target);
        this.setState({
            hobbies: [...this.state.hobbies, e.target.value]
        })
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleReset = () => {
        this.setState({
            firstName: '',
            lastName: "",
            email: "",
            address: "",
            gender: "",
            color: "",
            phonenumber: "",
            hobbies: "",
            isEditableIndex: null
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
            return false;
        }
        if (!this.state.email.includes("@")) {
            alert('Invalide email!')
            return false;
        }
            return true;
    }

    handleSubmit = () => {
        const x = this.validation();
        if (x) {
            
            const { firstName, lastName, email, gender, address, color, hobbies, phonenumber, list } = this.state
            console.log(this.state);
            list.push({
                firstName: firstName,
                lastName: lastName,
                email: email,
                address: address,
                gender: gender,
                hobbies: hobbies,
                color: color,
                phonenumber: phonenumber
            });
            this.setState({ list })
            console.log(this.state)
        
        }
    }

    deletee = (index) => {
        const { list } = this.state
        list.splice(index, 1);
        this.setState({ list })
    }

    updatee = (index) => {
        const { list } = this.state
        this.state.firstName = list[index].firstName;
        this.state.lastName = list[index].lastName;
        this.state.email = list[index].email;
        this.state.gender = list[index].gender;
        this.state.address = list[index].address;
        this.state.hobbies = list[index].hobbies;
        this.state.color = list[index].color;
        this.state.phonenumber = list[index].phonenumber;
        this.setState({ isEditableIndex: index })
    }
    render() {
        return (
            <React.Fragment>
                <h1>Registration form</h1>
                    First name:<input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} /><br /><br />

                    Last name:<input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} /><br /><br />

                    E-mail:<input type="text" value={this.state.email} name="email" onChange={this.handleChange} /><br /><br />

                    Address:<textarea type="text" value={this.state.address} name="address" onChange={this.handleChange} maxLength="50" cols="45" rows="2" /><br /><br />

                    Gender:<div onChange={this.setGender}>
                    <input type="radio" value="male" checked={this.state.gender === "male"} name="gender" />Male
                <input type="radio" value="female" checked={this.state.gender === "female"} name="gender" />Female<br /><br />
                </div>

                    Hobbies:<div onChange={this.setCheck} >
                    <input type="checkbox" name="hobbies" checked={this.state.hobbies.includes("Drawing")} value="Drawing" />Drawing
                    <input type="checkbox" name="hobbies" checked={this.state.hobbies.includes("Skating")} value="Skating" />Skating
                    <input type="checkbox" name="hobbies" checked={this.state.hobbies.includes("Coding")} value="Coding" />Coding
                    <input type="checkbox" name="hobbies" checked={this.state.hobbies.includes("Swimming")} value="Swimming" />Swimming
                    <input type="checkbox" name="hobbies" checked={this.state.hobbies.includes("Dancing")} value="Dancing" />Dancing<br /><br />
                </div>

                    Favroute Color:<select value={this.state.color} name="color" onChange={this.handleChange}>
                    <option value="Red" onChange={this.handleChange}>Red</option>
                    <option value="green" onChange={this.handleChange}>Green</option>
                    <option value="Black" onChange={this.handleChange}>Black</option>
                    <option value="lightred" onChange={this.handleChange}>lightred</option>
                    <option value="lightgreen" onChange={this.handleChange}>lightgreen</option>
                </select><br /><br />

                    Phone Number : <input type="tel" maxlength="10" value={this.state.phonenumber} onChange={this.handleChange} name="phonenumber" /> <br /><br />

                <button onClick={this.handleSubmit}>Submit</button>

                <button onClick={this.handleReset}>Reset</button><br /><br />


                <table border="1px solid">
                    <thead>
                        <tr>
                            <th>firstName</th>
                            <th>LastName</th>
                            <th>E-mail</th>
                            <th>Gender</th>
                            <th>address</th>
                            <th>Hobbies</th>
                            <th>Color</th>
                            <th>phonenumber</th>
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
                                    <td>{user.gender}</td>
                                    <td>{user.address}</td>
                                    <td>{user.hobbies}</td>
                                    <td>{user.color}</td>
                                    <td>{user.phonenumber}</td>
                                    <td>
                                        <button onClick={() => { this.updatee(index) }}>Edit</button>
                                        <button onClick={() => { this.deletee(index) }}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            </React.Fragment>
        )
    }
}
