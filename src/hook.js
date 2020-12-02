import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Hook = () => {
    const state = {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        address: "",
        country: "",
        isActive: ""
    }
    return (
        //creation of form without form attribute is here.
        <>
            <div className="container">
                <button className="btn-primary" type="button" data-target="#hideen" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">Add New</button>
                <div className="row">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr className="table-striped">
                                    <th>First name</th>
                                    <th>Last name</th>
                                    <th>Age</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table><br />
                    </div>
                </div>
                <div className="row>">

                    <div className="col-md-6" id="hideen">
                        <h2>Registration Form</h2> <br />
                First name: <br />
                        <input className="form-control" name="firstname" type="text" placeholder="Enter YourFirst Name" /><br />
                Last name: <br />
                        <input className="form-control" name="lastname" type="text" placeholder="Enter YourLast Name" /><br />
                Age :<br />
                        <input className="form-control" type="text" name="age" placeholder="Enter Your Age" /><br />
                Gender : <br />
                        <input type="radio" name="gender" value="male" />Male
                <input type="radio" name="gender" value="female" />Female
                <input type="radio" name="gender" value="others" />Others<br /><br />
                Address : <br />
                        <textarea className="form-control" cols="25" rows="4" placeholder="Enter Your Address">
                        </textarea>
                Country : <br />
                        <select className="form-control" name="country" id="country" required>
                            <option>Select Your Country</option>
                            <option value="India">India</option>
                            <option value="Brazil">Brazil</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Dubai">Dubai</option>
                        </select><br />
                        <input type="checkbox" /> <label>I Agree the Terms & Conditions</label><br />
                        <button className="btn-primary">Submit</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Hook;