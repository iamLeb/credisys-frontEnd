import { useState } from "react";
import Button from "../../components/Button";
import {Link} from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={handleForm}>
                <div className="container">
                    <h1>Login</h1>
                    <p>Please login with your credentials.</p>

                    <label htmlFor="email"><b>Email</b></label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Enter Email"
                           name="email" required/>

                    <label htmlFor="password"><b>Password</b></label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password"
                           placeholder="Enter Password" name="password" required/>

                    <div className="clearfix">
                        <Button text={'Login in'} color={'green'}/>
                    </div>
                    <p>Do not have an account? <Link style={{textDecoration: "none"}} to={'/register'}>Register
                        Now!</Link></p>
                    <p><Link to={'/'}>Go back to homePage</Link></p>

                </div>
            </form>
        </>
    );
}