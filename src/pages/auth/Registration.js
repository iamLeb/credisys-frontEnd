import { useState } from "react";
import Button from "../../components/Button";
import {Link} from "react-router-dom";

export default function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setpasswordConfirm] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={handleForm}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>

                    <label htmlFor="name"><b>Full Name</b></label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" name="name"
                           placeholder="Enter fullname" required/>

                    <label htmlFor="email"><b>Email</b></label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Enter Email"
                           name="email" required/>

                    <label htmlFor="password"><b>Password</b></label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password"
                           placeholder="Enter Password" name="password" required/>

                    <label htmlFor="passwordConfirm"><b>Password Confirmation</b></label>
                    <input value={passwordConfirm} onChange={e => setpasswordConfirm(e.target.value)} type="password"
                           id="passwordConfirm" placeholder="Enter Password again" name="passwordConfirm" required/>

                    <div className="clearfix">
                        <Button text={'Sign Up'} color={'blue'}/>
                    </div>
                    <p>Already have an account? <Link style={{ textDecoration: "none"}} to={'/login'}>Login now </Link></p>
                    <p><Link to={'/'}>Go back to homePage</Link></p>

                </div>
            </form>
        </>
    );
}