import {useEffect, useState} from "react";
import Button from "../../components/Button";
import {Link, useNavigate} from "react-router-dom";
import Input from "../../components/Input";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // Check authentication status when the component mounts
    // Check authentication status when the component mounts
    useEffect(() => {
        axios.get('/check-session')
            .then(res => {
                console.log(res.data);
            });
    }, []);

    const handleForm = (e) => {
        e.preventDefault();
        try {
            axios.post('/api/login', {email, password})
                .then(res => {
                    const error = res.data.error;
                    if (error) {
                        toast.error(error);
                    } else {
                        // setEmail('');
                        // setPassword('');
                        console.log(res)
                        // navigate('/');
                    }
                })
                .catch(err => console.log(err));
        } catch (e) {
            console.log(e);
        }

    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Login</h2>
                    <form onSubmit={handleForm}>

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
                        <Button text="Signup" color={'blue'}/>
                        <p>Do not have an account? <br/>
                            <div className="row">
                                <div className="col-md-6">
                                    <Link style={{textDecoration: "none"}} to={'/property-management/register'}>Property Manager</Link>
                                </div>
                                <div className="col-md-6">
                                    <Link style={{textDecoration: "none"}} to={'/tenant/register'}>Tenant</Link>
                                </div>
                            </div>
                        </p>

                        <p><Link style={{textDecoration: "none"}} to={'/'}>Go back to homePage</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}