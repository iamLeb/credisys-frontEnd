import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import axios from "axios";
import { UserContext } from "../../context/userContext";
import toast from "react-hot-toast";

export default function Login() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "enter email",
            label: "Email address",
            errorMessage: "Email must be valid",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "enter password",
            label: "Password",
            required: true,
        }
    ];

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            await axios
                .post("/api/login", { email: values.email, password: values.password })
                .then((res) => {
                    const error = res.data.error;
                    if (error) {
                        toast.error(error);
                    } else {
                        setUser(res.data);
                        toast.success("Logging user in!");
                        navigate("/dashboard");
                    }
                })
                .catch((err) => console.log(err));
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
                        <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls.
                            Each required form group has a validation state that can be triggered by attempting to submit the form
                            without completing it.</p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form onSubmit={handleForm} className="p-4 p-md-5 border rounded-3 bg-light">
                            {inputs.map((input) => (
                                <Input
                                    key={input.id}
                                    {...input}
                                    value={values[input.name]}
                                    onChange={onChange}
                                />
                            ))}

                            <div className="checkbox mb-3">
                                <small className="text-muted" style={{cursor: "pointer"}} onClick={() => navigate('/register')}>Do not
                                    have an account? Register</small>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
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
    );
}
