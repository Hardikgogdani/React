import React from 'react'
import './App.css'

const Hook = () => {
    return (
        //creation of form without form attribute is here.
        <>
            <table>
                <thead>
                    <td>
                        <h1>Registration Form</h1><br />

                        First name:<input type="text" name="firstName" /><br /><br />

                        Last name:<input type="text" name="lastName" /><br /><br />

                        Age:<input type="text" name="age" /><br /><br />

                        Gender:
                                <input type="radio" value="male" name="gender" />Male
                                <input type="radio" value="female" name="gender" />Female
                                <input type="radio" value="other" name="gender" />Other<br /><br />

                        Address:<textarea type="text" name="address" maxLength="50" cols="45" rows="2" /><br /><br />

                        Country:<select name="country">
                            <option value="India" >India</option>
                            <option value="USA" >USA</option>
                            <option value="Brasil"  >Brasil</option>
                            <option value="Dubai" >Dubai</option>
                            <option value="UK">UK</option></select><br /><br />

                        IsActive : <input type="checkbox" name="isactive" value="isactive" /><br /><br />

                        <button>Submit</button>

                    </td>
                    <td id="table-border">

                        <h1>List</h1>

                        <button id="buttonadd">Add New</button>
                        <table border="1px solid">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>

                        </table>


                    </td>
                </thead>
            </table>
        </>
    )
}
export default Hook;