import React, { useState } from "react";
import axios from "axios";

function RegisterPage() {
    const [formData, setFormData] = useState({
        uid: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        confirm_password: "",
        is_admin: false,
        is_staff: false,
        is_user: true,
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('')


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: fieldValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({}); // Reset errors
        // Perform validation
        const validationErrors = validateFormData(formData);
        if (Object.keys(validationErrors).length === 0) {

            axios
                .post("https://liveupcomingpro-production-f9ac.up.railway.app/role/register/", formData)
                .then((response) => {
                    //console.log(response);
                    if (response.status === 201) {
                        //console.log("Registration successfully");
                        window.alert("Registration successfully"); // Display success message in an alert box
                        setStatus("Register sucessfully ")
                        setFormData({
                            uid: "",
                            email: "",
                            first_name: "",
                            last_name: "",
                            password: "",
                            confirm_password: "",
                            is_admin: false,
                            is_staff: false,
                            is_user: true,
                        });
                    } else {
                        //console.log("Registration failed");
                        window.alert("Registration failed"); // Display error message in an alert box
                    }
                }).catch((error) => {
                    //console.log(error);
                    window.alert("Registration failed"); // Display error message in an alert box
                });
        } else {
            setErrors(validationErrors);
        }
    };

    // Function to validate the form data
    const validateFormData = (data) => {
        const errors = {};
        if (data.uid.trim() === "") {
            errors.uid = "UID is required";
        }
        if (data.email.trim() === "") {
            errors.email = "Email is required";
        }

        if (data.password.trim() === "") {
            errors.password = "Password is required";
        }
        if (data.confirm_password.trim() === "") {
            errors.confirm_password = "Confirm Password is required";
        } else if (data.confirm_password !== data.password) {
            errors.confirm_password = "Passwords do not match";
        }
        // Add more validation rules as needed

        return errors;
    };

    return (
        <>
            <div clasName='container-fluid py-5 mt-3 ' id="AdminEmp">
                <div className="container d-flex justify-content-center align-items-center vh-auto " >
                    <div className="card p-5 w-75" id="AdminEmp" >
                        <h2 className="card-title text-center mb-4" id="h1">Register</h2>
                        <form onSubmit={handleSubmit} >
                            <center><p className='text-center text-success fs-5'>{status}</p></center>
                            <div className="mb-3">
                                <label className="form-label" id='h1'>User Id: *</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.uid ? "is-invalid" : ""}`}
                                    name="uid"
                                    value={formData.uid}
                                    onChange={handleChange}
                                />
                                {errors.uid && (
                                    <div className="invalid-feedback">{errors.uid}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label className="form-label" id='h1'>Email: *</label>
                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">{errors.email}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label className="form-label" id='h1'>First Name: *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" id='h1'>Last Name: *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" id='h1'>Password: *</label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && (
                                    <div className="invalid-feedback">{errors.password}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label className="form-label" id='h1'>Confirm Password: *</label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.confirm_password ? "is-invalid" : ""
                                        }`}
                                    name="confirm_password"
                                    value={formData.confirm_password}
                                    onChange={handleChange}
                                />
                                {errors.confirm_password && (
                                    <div className="invalid-feedback">
                                        {errors.confirm_password}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="is_admin"
                                    checked={formData.is_admin}
                                    onChange={handleChange}
                                    disabled
                                />
                                <label className="form-label" id='h1'>Admin</label>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="is_staff"
                                    checked={formData.is_staff}
                                    onChange={handleChange}
                                    disabled
                                />
                                <label className="form-label" id='h1'>Staff</label>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="is_user"
                                    checked={formData.is_user}
                                    onChange={handleChange}
                                />
                                <label className="form-label" id='h1'>User*</label>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
