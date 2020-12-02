import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Hook = () => {

    const [userDetail, setUserDetail] = useState({});
    const [data, setData] = useState([]);

    // here hiding and showing of table
    const [showResults, setShowResults] = React.useState(true)
    const onClick = () => setShowResults(!showResults)


    const handleChange = e => {
        const { name, value } = e.target;
        setUserDetail({ ...userDetail, [name]: value })
    }

    const SubmitValue = () => {
        setShowResults(!showResults)
        setData([...data, userDetail])

        setUserDetail({})
        
    }


    return (
        //creation of form without form attribute is here.
        <>
            <div className="container">

                <button className="btn-primary" type="button" onClick={onClick} value="Add Me">Add Me </button>

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

                {showResults  && <div className="row>">

                    <div className="col-md-6" id="hideen">
                        <h2>Registration Form</h2> <br />
                First name: <br />
                        <input className="form-control" name="firstname" type="text" value={userDetail.firstName || ''} onChange={handleChange} /><br />
                Last name: <br />
                        <input className="form-control" name="lastname" type="text" value={userDetail.lastName || ''} onChange={handleChange} /><br />
                Age :<br />
                        <input className="form-control" type="text" name="age" value={userDetail.age || ''} onChange={handleChange} /><br />
                Gender : <br />
                        <input type="radio" name="gender" value="male" onChange={handleChange} value="male" />Male
                <input type="radio" name="gender" value="female" onChange={handleChange} value="female" />Female
                <input type="radio" name="gender" value="others" onChange={handleChange} value="other" />Others<br /><br />
                Address : <br />
                        <textarea className="form-control" cols="25" rows="4" placeholder="Enter Your Address" value={userDetail.address || ''} onChange={handleChange}>
                        </textarea>
                Country : <br />
                        <select className="form-control" name="country" id="country" value={userDetail.country || ''} onChange={handleChange} required>
                            <option>Select Your Country</option>
                            <option value="India">India</option>
                            <option value="Brazil">Brazil</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Dubai">Dubai</option>
                        </select><br />
                        IsActive: <input type="checkbox" name="active" onChange={handleChange} /><br />
                        <button className="btn-primary" onClick={SubmitValue}>Submit</button>
                    </div>
                </div>}
            </div>

        </>
    )
}
export default Hook;