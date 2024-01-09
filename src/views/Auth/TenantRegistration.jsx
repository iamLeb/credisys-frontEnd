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
            <div className="200 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Register with Credisys
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleForm} method="POST">
                        {inputs.map((input) => (
                            <Input
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Create account
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <span onClick={() => navigate('/login')} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
        ;
}
