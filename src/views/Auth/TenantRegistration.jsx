import Input from "../../components/Input.jsx";
import { UserContext } from "../../context/userContext.jsx";
import React, { useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function TenantRegistration() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const inputs = [
        {
            id: 1,
            name: "firstName",
            type: "text",
            placeholder: "enter first name",
            label: "First Name",
            errorMessage: "First name should be between 3-16 character",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$",
        },
        {
            id: 2,
            name: "lastName",
            type: "text",
            placeholder: "enter last name",
            label: "Last Name",
            errorMessage: "Last name should be between 3-15 character",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$",
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "enter email",
            label: "E-mail",
            errorMessage: "Email must be valid",
            required: true,
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "enter password",
            label: "Password",
            errorMessage:
                "Password should be between 8-20 characters, include at least 1 letter, 1 Number, and 1 special case",
            required: true,
            // pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$'
        },
        {
            id: 5,
            name: "passwordConfirm",
            type: "password",
            placeholder: "enter password again",
            label: "Password Confirm",
            errorMessage: "Passwords don't match",
            required: true,
            pattern: values.password,
        },
    ];
    const handleForm = (e) => {
        e.preventDefault();
        // check if email already exist
        axios
            .post("/api/tenant", values)
            .then((res) => {
                if (res.data.error) {
                    toast.error(res.data.error);
                } else {
                    toast.success("Registration complete, logging in!");
                    setUser(res.data);
                    navigate("/dashboard");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-md-10 mx-auto col-lg-12">
                        <form onSubmit={handleForm} className="p-4 p-md-5 border rounded-3 bg-light">
                            <h6 className="display-5 fw-bold lh-1 mb-3">Create Account</h6>
                            {inputs.map((input) => (
                                <Input
                                    key={input.id}
                                    {...input}
                                    value={values[input.name]}
                                    onChange={onChange}
                                />
                            ))}
                            <div className="checkbox mb-3">
                                <small className="text-muted" style={{cursor: "pointer"}} onClick={() => navigate('/login')}>Already have an account? Login</small>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Create New Account</button>
                            <hr className="my-4"/>
                            <button onClick={() => navigate('/')} type="button"
                                    className="w-100 btn btn-outline-info btn-sm">Home page
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="b-example-divider"></div>
        </>
    )
        ;
}
