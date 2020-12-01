import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Hook = () => {
    const state = {
        firstName :"",
        lastName: "",
        age:"",
        gender: "",
        address: "",
        country:"",
        isActive:""
    }
    return (
        //creation of form without form attribute is here.
        <>
        <div className="container">
        <table className="table">
                <thead>
                    <td>
                        <h1>Registration Form</h1><br />

                        First name:<input type="text" name="firstName" className="form-control"/><br />

                        Last name:<input type="text" name="lastName" className="form-control"/><br />

                        Age:<input type="text" name="age" className="form-control"/><br />

                        Gender:
                                <input type="radio" value="male" name="gender" />Male
                                <input type="radio" value="female" name="gender" />Female
                                <input type="radio" value="other" name="gender" />Other<br />

                        Address:<textarea type="text" name="address" maxLength="50" cols="45" rows="2" className="form-control"/><br />

                        Country:<select name="country" className="form-control">
                            <option value="India" >India</option>
                            <option value="USA" >USA</option>
                            <option value="Brasil"  >Brasil</option>
                            <option value="Dubai" >Dubai</option>
                            <option value="UK">UK</option></select><br />

                        IsActive : <input type="checkbox" name="isactive" value="isactive" /><br />

                        <button className="btn-primary">Submit</button>

                    </td>
                    <td id="table-border">

                        <h1>List</h1>

                        <button className="btn-primary">Add New</button>
                        <table className="table" border="1px solid">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th colSpan="2">Action</th>
                            </tr>
                            <tbody>
                                
                            </tbody>

                        </table>


                    </td>
                </thead>
            </table>
        </div>
            
        </>
    )
}
export default Hook;