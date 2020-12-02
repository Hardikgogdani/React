import React, { useState, useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const Hook = () => {
    const [userDetail, setUserDetail] = useState({
        firstName: "",
        lastName: "",
        address: "",
        gender: "",
        age: "",
        country: "",

    });
    const [list, setList] = useState([]);
    const [showForm, setShowForm] = useState(true)
    const [editableIndex, setEditableIndex] = useState(null);
    const [error, setError] = useState({});


    useEffect(() => {
        let Data = [];
        if (JSON.parse(localStorage.getItem("list")) !== null) {
            Data = JSON.parse(localStorage.getItem("list"));
        }
        setList(Data);
    }, [])

    const validation = () => {
        let iserror = false;
        const error1 = {};
        if (userDetail.firstName === "") {
            error1.firstName = "First Name should be written";
            iserror = true;
        }
        if (userDetail.lastName === "") {
            error1.lastName = "Last Name should be written";
            iserror = true;
        }
        if (userDetail.age === "" || isNaN(userDetail.age) || userDetail.age < 1 || userDetail.age > 150) {
            error1.age = "age must required";
            iserror = true;
        }
        if (userDetail.gender === "") {
            error1.gender = "Any one Gender to be selected";
            iserror = true;
        }
        if (userDetail.address === "") {
            error1.address = "address should be written";
            iserror = true;
        }
        if (userDetail.country === "") {
            error1.country = "Any one country should be selected";
            iserror = true;
        }
        // if (userDetail.agree === "") {
        //     error1.agree = "you must agree first";
        //     return true;
        // }
        setError(error1)
        return iserror;
    }

    const onAdd = () => {
        setShowForm(!showForm)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        // if (name === "active") {
        //     setUserDetail({ ...userDetail, [name]: checked })
        // } else 
        if (name === "gender") {
            setUserDetail({ ...userDetail, [name]: value })
        } else {
            setUserDetail({ ...userDetail, [name]: value })
        }
    }

    const onDelete = (index) => {
        setList(list.filter((value, i) => i !== index))
        localStorage.setItem('list', JSON.stringify(list));
        localStorage.removeItem('list');
    }

    const onEdit = (index) => {
        setShowForm(!showForm)
        setUserDetail(list[index])
        setList(list)
        setEditableIndex(index)
    }

    const submitValue = () => {
        const x = validation();
        if (x) {
            return
        }

        if (editableIndex !== null) {
            list[editableIndex] = userDetail
        } else
            if (!x) {

                list.push(userDetail)
                setList(list)
            }
        localStorage.setItem("list", JSON.stringify(list));
        setUserDetail({})
        setEditableIndex(null)
        setShowForm(!showForm)
    }

    return (
        <div className="container">
            <br /><button className="btn-primary" type="button" onClick={onAdd}>Add New</button><br /><br />
            <div className="row table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.firstName}</td>
                                    <td>{value.lastName}</td>
                                    <td>{value.age}</td>
                                    <td>
                                        <button onClick={() => { onEdit(index) }}>Edit</button>
                                        <button onClick={() => { onDelete(index) }}>Delete</button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <br />
            {showForm && <div className="col-md-6">
                <h2>Registration Form</h2><br />

                <b>FIRST NAME</b> : <input type="text" name="firstName" value={userDetail.firstName}
                    onChange={handleChange} /><span style={{ color: "red" }}>{error.firstName}</span><br /><br />

                <b>LAST NAME</b> : <input type="text" name="lastName" value={userDetail.lastName}
                    onChange={handleChange} /><span style={{ color: "red" }}>{error.lastName}</span><br /><br />

                <b>AGE</b> : <input type="text" name="age" value={userDetail.age}
                    onChange={handleChange} /><span style={{ color: "red" }}>{error.age}</span><br /><br />

                <b>GENDER</b> :{' '}<input type="radio" name="gender" checked={userDetail.gender === "male"} onChange={handleChange} value="male" />Male{' '}
                <input type="radio" name="gender" checked={userDetail.gender === " female"} onChange={handleChange} value="female" />Female{' '}
                <input type="radio" name="gender" checked={userDetail.gender === "other"} onChange={handleChange} value="other" />Other<span style={{ color: "red" }}>{error.gender}</span><br /><br />

                <b>ADDRESS</b> : <input type="text" name="address" value={userDetail.address}
                    onChange={handleChange} /><span style={{ color: "red" }}>{error.address}</span><br /><br />

                <b>COUNTRY</b>:{' '}<select name="country" value={userDetail.country} onChange={handleChange}>
                    <option value="India">India</option>
                    <option value="Brazil">Brazil</option>
                    <option value="USA">USA</option>
                    <option value="Dubai">Dubai</option>
                    <option value="UK">UK</option>
                </select><span style={{ color: "red" }}>{error.country}</span><br /><br />

                <b>IS Agree :</b>: <input type="checkbox" checked name="active" onChange={handleChange} /><br /><br />

                <button className="btn-primary" onClick={submitValue}>Submit</button>
            </div>}
        </div>
    )
}
export default Hook;