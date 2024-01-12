import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input.jsx";
import axios from "axios";

export default function Reset() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
    });

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            label: "Enter Your Email Address",
            errorMessage: "Email must be valid",
            required: true,
        }
    ];

    const handleForm = e => {
        e.preventDefault();
        axios.post('/password/reset', {email: values.email})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleForm}>
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
                                Reset Password
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Go back to login page?{' '}
                        <span onClick={() => navigate('/register')} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">
                            Confirm Email
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}
