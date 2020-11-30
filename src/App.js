import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


let list1 = [];
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
        isEditableIndex: null,
        error: {
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            color: "",
            gender: "",
            phonenumber: "",
            hobbies: ""
        }
    };
    componentDidMount() {

        list1 = [];
        if(JSON.parse(localStorage.getItem("list")) !== null ) {
            list1 = JSON.parse(localStorage.getItem("list"));

        };
        this.setState({list: list1});

    }


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

        const payload = {
            [e.target.name]: e.target.value,
        };

        if (e.target.name === "hobbies") {
            payload.hobbies = [...this.state.hobbies, e.target.value];
        }

        this.setState(payload);

    };

    validation = () => {
        const { firstName, lastName, email, address, gender, hobbies, color, phonenumber } = this.state;
        const error = {};

        if (firstName === "") {
            error.firstName = "Enter the first name!";
        }
        if (lastName === "") {
            error.lastName = "Enter the last name!";
        }
        if (!email.includes("@")) {
            error.email = "Enter the Valid E-mail!";
        }
        if (address === "") {
            error.address = "Enter the address!";
        }
        if (gender === "") {
            error.gender = "select the Gender!";
        }
        if (hobbies === "") {
            error.hobbies = "check your Hobbies!";
        }
        if (color === "") {
            error.color = "Enter your favroute Color!";
        }
        if (phonenumber === "") {
            error.phonenumber = "Enter your Phonenumber!";
        }
        this.setState({ error })
        
    }

    handleSubmit = () => {
        const x = this.validation();
        const { firstName, lastName, email, gender, address, color, hobbies, phonenumber, list } = this.state

        // if(!localStorage.getItem('list')){
        //     list.push({
        //         firstName: firstName,
        //         lastName: lastName,
        //         email: email,
        //         address: address,
        //         gender: gender,
        //         hobbies: hobbies,
        //         color: color,
        //         phonenumber: phonenumber
        //     });
        //     localStorage.setItem('list',JSON.stringify(list));
        // }
        // else{
            if(!x) {
                if(!localStorage.getItem('list')){
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
                } 
                this.setState({ list })
                localStorage.setItem('list',JSON.stringify(list));
            }
        // }
        this.setState({
            firstName: '',
            lastName: "",
            email: "",
            address: "",
            gender: "",
            color: "",
            phonenumber: "",
            hobbies: "",
        });
    }


    deletee = (index) => {
        list1 = JSON.parse(localStorage.getItem('list'));
        const { list } = this.state
        list.splice(index, 1);
        this.setState({ list })
        localStorage.removeItem('list');
        
    }

    updatee = (index) => {

        const { list } = this.state
        const update = {
            firstName: list[index].firstName,
            lastName: list[index].lastName,
            email: list[index].email,
            gender: list[index].gender,
            address: list[index].address,
            color: list[index].color,
            hobbies: list[index].hobbies,
            phonenumber: list[index].phonenumber,
        };

        this.setState({ isEditableIndex: index, ...update })
    }
    render() {
        return (
            <React.Fragment>
                <h1>Registration form</h1>
                    First name:<input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} /><span style={{ color: "red" }}>{this.state.error.firstName}</span><br /><br />

                    Last name:<input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} /><span style={{ color: "red" }}>{this.state.error.lastName}</span><br /><br />

                    E-mail:<input type="text" value={this.state.email} name="email" onChange={this.handleChange} /><span style={{ color: "red" }}>{this.state.error.email}</span><br /><br />

                    Address:<textarea type="text" value={this.state.address} name="address" onChange={this.handleChange} maxLength="50" cols="45" rows="2" /><span style={{ color: "red" }}>{this.state.error.address}</span><br /><br />

                    Gender:<div onChange={this.setGender}>
                    <input type="radio" value="male" checked={this.state.gender === "male"} name="gender" />Male
                <input type="radio" value="female" checked={this.state.gender === "female"} name="gender" />Female<span style={{ color: "red" }}>{this.state.error.gender}</span><br /><br />
                </div>

                    Hobbies:<div onChange={this.setCheck} >
                    <input type="checkbox" name="hobbies" checked={this.state.hobbies.includes("Drawing")} value="Drawing" />Drawing
                    <input type="checkbox" name="hobbies" checked={this.state.hobbies.includes("Skating")} value="Skating" />Skating
                    <input type="checkbox" name="hobbies" checked={this.state.hobbies.includes("Coding")} value="Coding" />Coding
                    <input type="checkbox" name="hobbies" checked={this.state.hobbies.includes("Swimming")} value="Swimming" />Swimming
                    <input type="checkbox" name="hobbies" checked={this.state.hobbies.includes("Dancing")} value="Dancing" />Dancing <span style={{ color: "red" }}>{this.state.error.hobbies}</span><br /><br />
                </div>

                    Favroute Color:<select value={this.state.color} name="color" onChange={this.handleChange}>
                    <option value="Red" onChange={this.handleChange}>Red</option>
                    <option value="green" onChange={this.handleChange}>Green</option>
                    <option value="Black" onChange={this.handleChange} >Black</option>
                    <option value="lightred" onChange={this.handleChange}>lightred</option>
                    <option value="lightgreen" onChange={this.handleChange}>lightgreen</option>
                </select><span style={{ color: "red" }}>{this.state.error.color}</span><br /><br />

                    Phone Number : <input type="tel" maxlength="10" value={this.state.phonenumber} onChange={this.handleChange} name="phonenumber" /> <span style={{ color: "red" }}>{this.state.error.phonenumber}</span><br /><br />

                <button onClick={this.handleSubmit}>Submit</button>

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