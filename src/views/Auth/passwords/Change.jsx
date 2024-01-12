import Input from "../../../components/Input.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Change() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        password: "",
    });

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const inputs = [
        {
            id: 1,
            name: "password",
            type: "password",
            label: "Enter new password",
            errorMessage: "Email must be valid",
            required: true,
        }, {
            id: 2,
            name: "passwordConfirm",
            type: "password",
            label: "Enter password again",
            errorMessage: "Email must be valid",
            required: true,
            pattern: values.password
        },

    ];

    const {token, email} = useParams();

    useEffect(() => {
        // allow user if token exist else redirect them to login page
        axios.post('/token/check', {token})
            .then(res  => {
                if (!res.data) navigate('/login')
            });
    }, []);


    const handleForm = e => {
        e.preventDefault();
       // check if token is valid
        axios.post('/token/check', {password: values.password, email, token})
            .then(res => {
                res.data && ((toast.success('Password Updated, Please Login...')) (navigate('/login')));
            })
            .catch(err => console.log(err)); // display error if any caught
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
                        Hello {email}, please create new password
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
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}
