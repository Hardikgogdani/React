import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

let list1 = [];
export default class CRUDE extends Component {
    // State is define here and all used were here
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

    // Before rendering the component i use component did mount here.
    componentDidMount() {

        list1 = [];
        if (JSON.parse(localStorage.getItem("list")) !== null) {
            list1 = JSON.parse(localStorage.getItem("list"));

        };
        this.setState({ list: list1 });

    }

    // herer setGender is a function for checking or validate for selecting one from afterAll.
    setGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    };
    // here setCheck is for checking all check box and showing in table which is below.
    setCheck = (e) => {
        this.setState({
            hobbies: [...this.state.hobbies, e.target.value]
        })
    };

    // handleChange is for by clicking the button then it will chencge the state of the behaviour of the input Fild.
    handleChange = e => {

        const payload = {
            [e.target.name]: e.target.value,
        };

        if (e.target.name === "hobbies") {
            payload.hobbies = [...this.state.hobbies, e.target.value];
        }

        this.setState(payload);

    };
    // validation of input field is here/

    validation = () => {
        const { firstName, lastName, email, address, gender, hobbies, color, phonenumber } = this.state;
        const error = {};
        let isError = false;

        if (firstName === "") {
            error.firstName = "Enter the first name!";
            isError = true;
        }
        if (lastName === "") {
            error.lastName = "Enter the last name!";
            isError = true;
        }
        if (!email.includes("@")) {
            error.email = "Enter the Valid E-mail!";
            isError = true;
        }
        if (address === "") {
            error.address = "Enter the address!";
            isError = true;
        }
        if (gender === "") {
            error.gender = "select the Gender!";
            isError = true;
        }
        if (hobbies === "") {
            error.hobbies = "check your Hobbies!";
            isError = true;
        }
        if (color === "") {
            error.color = "Enter your favroute Color!";
            isError = true;
        }
        if (phonenumber === "") {
            error.phonenumber = "Enter your Phonenumber!";
            isError = true;
        }
        this.setState({ error })
        return isError;

    }
    // handlesubmit is for pushing data into table and extra velidation is also apply.

    handleSubmit = () => {
        const x = this.validation();
        const { firstName, lastName, email, gender, address, color, hobbies, phonenumber, list,isEditableIndex } = this.state
        
        // here in this the data will  update in the row only no new row create after clicking submit button for the updation of the data.

        if(isEditableIndex !== null && isEditableIndex !== -1){
            list[isEditableIndex] = this.state;
            this.setState({list, isEditableIndex : null});
        }
        // checking if local storage having any data or not if data present then data will not push into table..
        else if (localStorage.getItem('list')) {
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
            localStorage.setItem('list', JSON.stringify(list));
        }
        // pusing of data into table is here/
        else {
            if (!x) {
                if (!localStorage.getItem('list')) {
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
                localStorage.setItem('list', JSON.stringify(list));
            }
        }
        // reseting of form is below
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

    // delete button in table so his function uis here.
    deletee = (index) => {
        list1 = JSON.parse(localStorage.getItem('list'));
        const { list } = this.state
        list.splice(index, 1);
        this.setState({ list })
        localStorage.removeItem('list');

    }

    // update button function is here.
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
        // list1 = JSON.parse(localStorage.getItem('list'));
        this.setState({ isEditableIndex: index, ...update })
    }
    render() {
        return (
            //creation of form without form attribute is here.
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

                <button onClick={this.handleSubmit} href="/table">Submit</button>

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
                            // table row and cell creation is here in that edit and delete button also reside in this.
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