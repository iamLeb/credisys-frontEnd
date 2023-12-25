import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {Link} from "react-router-dom";
import axios from "axios";

export default function TenantRegistration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleForm = (e) => {
        e.preventDefault();

        axios.post('//localhost:3000/api/tenant', {firstName: name, lastName: email})
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-50">
                    <h2>Tenant Registration</h2>
                    <form onSubmit={handleForm}>
                        <div className="row">
                            <div className="col-md-6">
                                <Input
                                    value={name}
                                    label="First Name"
                                    type="text"
                                    name="firstname"
                                    className="form-control rounded-0"
                                    onChange={e => {
                                        setName(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="col-md-6">
                                <Input
                                    value={name}
                                    label="Last Name"
                                    type="text"
                                    name="lastname"
                                    className="form-control rounded-0"
                                    onChange={e => {
                                        setName(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="col-md-12">
                                <Input
                                    value={email}
                                    label="Email"
                                    type="text"
                                    placeholder="Enter Email"
                                    name="email"
                                    className="form-control rounded-0"
                                    onChange={e => {
                                        setEmail(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="col-md-6">
                                <Input
                                    value={password}
                                    label="Password"
                                    type="password"
                                    placeholder="Enter Password"
                                    name="password"
                                    className="form-control rounded-0"
                                    onChange={e => {
                                        setPassword(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <Input
                                    value={password}
                                    label="Confirm Password"
                                    type="password"
                                    placeholder="Enter Password again"
                                    name="passwordConfirm"
                                    className="form-control rounded-0"
                                    onChange={e => {
                                        setPassword(e.target.value)
                                    }}
                                />
                            </div>
                        </div>

                        <Button text="Signup" color={'blue'}/>
                        <p>Already have an account? <Link style={{textDecoration: "none"}} to={'/login'}>Login</Link></p>
                        <p><Link style={{ textDecoration: "none"}} to={'/'}>Go back to homePage</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}